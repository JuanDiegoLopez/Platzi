const path = require('path')

const config = {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'bundle.js'
    }
}

module.exports = config
