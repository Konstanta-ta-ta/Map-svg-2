module.exports = {
    entry: {
        main: './src/index.js'
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
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    node: {
        fs: 'empty',
        net: 'empty'
    },
    target: 'web',
    mode: 'development',
};