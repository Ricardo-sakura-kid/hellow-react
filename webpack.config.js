module.exports = {
    // 入口文件
    entry: './index.js',

    // 输出文件
    output: {
        filename: 'bundle.js',
        publicPath: ''
    },

    module: {
        loaders: [
            // 匹配到js或jsx文件后 使用 babel-loader 来处理
            // '?'后面是该loader的参数设置(使用了es6和react转码器)
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    }
};