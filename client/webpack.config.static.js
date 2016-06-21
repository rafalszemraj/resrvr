var path = require('path');
var webpack = require('webpack');


module.exports = {

    devtool: 'eval',
    entry: './lib/index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
    ],
    externals: {
        "react":"React",
        'react-dom':"ReactDOM"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'lib')

        }]


    }




}
