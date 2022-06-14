const path = require('path');

module.exports = {
    //entry file
    //https://webpack.js.org/configration/entry-context#entry
    entry: ['@babel/polyfill', './src/js/main.js'],
    //번들링된 js 파일이름(filename)과 저장될 경로(path)를 지정
    //https://webpack.js.org/configration/output#outputpath
    //https://webpack.js.org/configration/output#outputfilename
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },

    //https://webpack.js.org/configration/module
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    //https://webpack.js.org/configration/mode
    mode: 'development'
}