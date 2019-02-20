const path = require('path');

// const waypoints = require('src/js/noframework.waypoints.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const SvgSpriteHtmlWebpackPlugin = require('svg-sprite-html-webpack');

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: './src/index.js',
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, "dist")
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        // creates style nodes from JS strings
                        loader: "style-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // translates CSS into CommonJS
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        // compiles Sass to CSS
                        loader: "sass-loader",
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true,
                            sourceMapContents: true
                        }
                    }
                    // Please note we are not running postcss here
                ]
            },
            {
                // Load all images as base64 encoding if they are smaller than 8192 bytes
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // On development we want to see where the file is coming from, hence we preserve the [path]
                            name: '[path][name].[ext]?hash=[hash:20]',
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            }
            // {
            //     test: /\.waypoints\.js$/,
            //     use: [ 'script-loader' ]
            // }
            // {
            //     test: /\.svg$/,
            //     exclude: /node_modules/,
            //     use: SvgSpriteHtmlWebpackPlugin.getLoader()
            // }
        ],
    },
    plugins: [
        
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: true
        })
        // new SvgSpriteHtmlWebpackPlugin({
        //     includeFiles: [
        //     './src/assets/*.svg',
        //     ]
        // })
    ]
};
