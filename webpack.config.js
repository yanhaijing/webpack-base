var dist = 'dist';
module.exports = {
    entry: {
        index: './js/index.js',
        test: './js/test.js'
    },
    output: {
        path: dist,
        filename: '[name].js'
    },
    module: {
        loaders: []
    },
    resolve: {
        // 现在可以写 require('file') 代替 require('file.coffee')
        extensions: ['', '.js']
    }
};
