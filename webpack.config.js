console.log(__dirname)
const path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// mock配置
var apiMocker = require('webpack-api-mocker')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index-[hash].js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        inline: true,
        open: true,
        port: 8111,
        proxy: {
            '/profile': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            }
        },
        hot: true,
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract(['css'])
        },{
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            },{
                loader: "css-loader?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]",
            },{
                loader: "less-loader"
            }]
        },{
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader?limit=8192&name=images/[name].[ext]'
        },{
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeComments : true, //去掉注释
                collapseWhitespace : true, //去掉空行
            }
        }),
        new HtmlWebpackInlineSourcePlugin(),
        new ExtractTextPlugin('./[name].css') //（打包后css文件路径）
    ]
}