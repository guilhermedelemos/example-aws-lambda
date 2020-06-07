import { v4 as uuid } from 'uuid';

export async function handler(event) {
    const responseBody = {
        id: uuid(),
        date: new Date().toISOString(),
        message: 'Hello from Lambda!',
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify(responseBody),
    };
    return response;
}
