const path = require('path')
//导入html-webpack-plugin 这个插件，得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')
//new 构造函数，创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    //指定要复制哪个页面
    template: './src/index.html',
    //指定复制出来的文件名和存放路径
    filename: './index.html'
})

//! 使用node.js中的导出语法，向外导出一个webpack的配置对象
//! 代表webpack运行的模式，可选值有两个，一个是development，一个是production=>是代码压缩
//! 开发用development，发布上线用production
module.export = {
    mode: 'development',
    //* 一般情况下，webpack是默认处理src里的index.js；默认生成dist里的main.js
    //* 当然，有默认就有自定义
    //* entry 指定要处理哪个文件
    entry: path.join(__dirname, './src/index.js'),
    //* output 指定生成的对象要存放在哪里
    output: {
        //* 存放的目录
        path: path.join(__dirname, 'dist'),
        //* 生成的文件名
        filename: 'test.js'
    },
    //插件的数组，将来webpack在运行时，回家再并调用这些插件
    Plugins: [htmlPlugin],
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 80
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']}
        ]
    }
}