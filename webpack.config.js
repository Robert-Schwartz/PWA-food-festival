// require packages
const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
// const WebpackPwaManifest = require("webpack-pwa-manifest");


// main configuration options object
//============================================================
// Must contain entry, output, mode.  the rest are optional
// entry point is the root of the bundle/beginning of the dependency graph
// output the bundled code to the folder we specify
// mode in which we want webpack to run (development or production)
// plugins - directions on how to operate
const config = {
    entry: {
        app: './assets/js/script.js',
        events: './assets/js/events.js',
        schedule: './assets/js/schedule.js',
        tickets: './assets/js/tickets.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name(file) {
                                return '[path][name].[ext]';
                            },
                            publicPath(url) {
                                return url.replace('../', '/assets/');
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })
    ],
    mode: 'development'
};

module.exports = config;
