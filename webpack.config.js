// require path node module
const path = require("path");

// main configuration options object
module.exports = {
    // entry point is the root of the bundle/beginning of the dependency graph
    // output the bundled code to the folder we specify
    // mode in which we want webpack to run
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    mode: 'development'
};
