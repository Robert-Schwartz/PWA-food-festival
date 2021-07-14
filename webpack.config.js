// require packages
const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


// main configuration options object
//============================================================
// Must contain entry, output, mode.  the rest are optional
// entry point is the root of the bundle/beginning of the dependency graph
// output the bundled code to the folder we specify
// mode in which we want webpack to run (development or production)
// plugins - directions on how to operate
module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static", // the report outputs to an HTML file in the dist folder
        })
    ],
    mode: 'development'
};
