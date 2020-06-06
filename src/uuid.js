import { v4 as uuid } from 'uuid';

exports.handler = async (event) => {
    const responseBody = {
        id: uuid(),
        dateTime: new Date().toISOString(),
        event
    };

    const response = {
        statusCode: 200,
        body: JSON.stringify(responseBody),
    };
    return response;
};
