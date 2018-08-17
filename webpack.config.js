var path = require('path');
module.exports = {
    //入口文件
    entry: path.resolve(__dirname, './src/main.js'),
    //出口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js" 
    },
    devServer: {
        contentBase: './',//内置服务器动态加载页面所在的目录
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    plugins: [                                             
                        ["import", { libraryName: "antd", style: "css" }]   //需要配置的地方
                    ]                                                    
                }
            }
        ]
    }
}