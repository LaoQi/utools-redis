var webpcak = require('webpack');

module.exports = {
    entry: [
        './app.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    }
}
