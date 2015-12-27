# webpack-base
基于webpack的demo。

## 安装
需要先安装[node](http://nodejs.org)，然后打开命令行输入下面的命令，安装gulp：

    $ npm install webpack -g

然后切换到项目目录，安装项目的依赖：

    $ npm install

## 运行

    webpack 来执行一次开发的编译
    webpack -p 来针对发布环境编译(压缩代码)
    webpack --watch 来进行开发过程持续的增量编译(飞快地!)
    webpack -d 来生成 SourceMaps
