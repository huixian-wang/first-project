console.log(__dirname)
const path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// mock配置
var apiMocker = require('webpack-api-mocker')
// var mocker = require('./src/mock')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index-[chunkhash].js'
        // publicPath: 'dist/'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        inline: true,
        open: true,
        port: 8111,
        // before(app){
        //     apiMocker(app, path.resolve('./src/mock.js'), {
        //         proxy: {
        //             '/texstdata//*': 'https://api.github.com/',
        //         },
        //         changeHost: true,
        //     })
        // }
        proxy: {
            '/profile': {
                target: 'http://localhost:3000',
                // pathRewrite: {^/}
                changeOrigin: true,
                // pathRewrite: function(path, req) {
                //     return path.replace(/^\/testdata/, '/testdata')
                // },
                // onProxyReq: function(proxyReq, req, res) {
                //     proxyReq.method = 'GET';
                //     proxyReq.setHeader('Access-Control-Allow-Origin', true);
                // },
                // bypass: function(req, res, proxyOptions) {
                //     var noProxy = [
                //         // '/api/course/courseList.action'
                //     ];
                //     if (noProxy.indexOf(req.url) !== -1) {
                //         console.log('Skipping proxy for browser request.');
                //         return req.url;
                //     }
                // },
            }
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            // use: ExtractTextPlugin.extract({
            //     // filename: '/dist/style.css',
            //     // use: [{
            //         loader: 'css-loader',
            //         // option: {
            //         //     importLoaders: 2
            //         // }
            //     // }]
            // })
            use: ExtractTextPlugin.extract(['css'])
        },{
            test: /\.less$/,
            // use:[ 'style-loader','css-loader','less-loader']
            use: [{
                loader: "style-loader"
            },{
                loader: "css-loader?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]",
                // options: {
                //     modules: true,
                //     localIdentName: '[name]__[local]--[hash:base54:5]'
                // }
            },{
                loader: "less-loader"
            }]
        },{
            test: /\.(jpg|png|gif)$/,
            // loader: 'url-loader?limit=8192'
            loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            // use: [{
            //     loader: 'url-loader',
            //     options: {
            //         limit: 8192
            //     }，
        },{
            test: /\.(js|jsx)$/,
            // loader: 'babel-loader?preset=[[env], [react]]'
            use: {
                loader: 'babel-loader'
                // options: {
                //     preset: ['env', 'react']
                // }
            },
            exclude: /node_modules/
        }]
    },
    plugins: [
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