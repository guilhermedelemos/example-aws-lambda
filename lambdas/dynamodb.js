import exampleDynamoDB from '../src/example-dynamodb.js';

export async function handler(event) {
    return await exampleDynamoDB(event);;
}
