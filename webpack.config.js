// const path = require('path');

module.exports = {
    // entry: './src/example-dynamo.js',
    // output: {
    //     filename: 'index.js',
    //     path: path.resolve(__dirname, 'dist'),
    // },
    entry: {
        uuid: './src/uuid.js',
        dynamodb: './src/example-dynamo.js'
    }
};
