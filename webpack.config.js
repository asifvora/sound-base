const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({ favicon: 'public/favicon.ico', template: "public/index.html", filename: "index.html" });
const cssPlugin = new MiniCssExtractPlugin({ filename: '[name].css' });
const cleanPlugin = new CleanWebpackPlugin(['dist']);
const generateSWPlugin = new WorkboxPlugin.GenerateSW({ clientsClaim: true, skipWaiting: true });
const uglifyPlugin = new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: true });
const definePlugin = new webpack.DefinePlugin({
    'process.env': {
        'API_ENDPOINT': JSON.stringify('https://api.soundcloud.com/'),
        'CLIENT_ID': JSON.stringify('a281614d7f34dc30b665dfcaa3ed7505')
    }
})

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/, // /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // 'postcss-loader',
                    // 'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                // loader: "file-loader?name=/assets/img/[name].[ext]",
                use: [
                    'file-loader?name=/assets/img/[name].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ],
            },
            {
                test: /favicon\.ico$/,
                loader: "url-loader",
                query: { mimetype: "image/x-icon" },
                query: {
                    limit: 1,
                    name: '[name].[ext]',
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        // outputPath: 'file-loader?name=/assets/fonts/[name].[ext]',
                    }
                }]
            }
        ]
    },
    optimization: {
        minimizer: [uglifyPlugin, new OptimizeCSSAssetsPlugin({})]
    },
    plugins: [cleanPlugin, htmlPlugin, cssPlugin, generateSWPlugin, definePlugin],
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    devServer: {
        historyApiFallback: true,
    }
};