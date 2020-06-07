import { v4 as uuid } from 'uuid';
import AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB.DocumentClient();

export default async function exampleDynamoDB(event) {
    const rawQueryStringParameters = event.rawQueryString;
    const domainName = event.requestContext.domainName;
    const path = event.requestContext.http.path;
    const method = event.requestContext.http.method;
    const protocol = event.headers["x-forwarded-proto"];
    const requestBody = event.body ? JSON.parse(event.body) : null;

    const url = `${method} ${protocol}://${domainName}${path}?${rawQueryStringParameters}`;

    const responseBody = {
        id: uuid(),
        url,
        dateTime: new Date().toISOString(),
        requestBody,
        "awsEvent": event 
    };

    await dynamodb.put({
        TableName: 'TestTable',
        Item: responseBody,
    }).promise();

    const response = {
        statusCode: 200,
        body: JSON.stringify(responseBody),
    };
    return response;
}
