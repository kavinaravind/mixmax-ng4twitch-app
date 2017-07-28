var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

module.exports = {
    entry: './src/app/main.ts',
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loaders: ['html-loader']
            },
            {
                test: /\.css$/,
                loaders: ['raw-loader']
            }
        ],
        exprContextCritical: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new HtmlWebpackExternalsPlugin({
            externals: [
                {
                    module: 'bootstrap',
                    entry: 'dist/css/bootstrap.min.css',
                },
                {
                    module: 'mixmax',
                    entry: 'https://d1xa36cy0xt122.cloudfront.net/v1/Mixmax.js',
                    global: 'Mixmax'
                }
            ]
        })
    ]
};