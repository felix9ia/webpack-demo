const path = require("path");

module.exports = {
  entry: ["./src/utils"], //入口文件,从项目根目录指定
  output: {
    //输出路径和文件名，使用path模块resolve方法将输出路径解析为绝对路径
    path: path.resolve(__dirname, "./dist"), //将js文件打包到dist/js的目录
    filename: "main.js",
    libraryTarget: "commonjs2"
  },
};
