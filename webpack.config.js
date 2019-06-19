const path = require('path');
module.exports  = {
    entry: path.join(__dirname,'/src/index.ts'),
    output: {
        filename: 'metropoli.js',
        publicPath: 'dist',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".tsx",".ts",".js"]
    }
}