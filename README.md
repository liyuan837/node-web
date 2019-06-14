前后端分离之NodeJS+mysql分层之美——博客地址：https://www.jianshu.com/p/dab01487a9df
一、项目配置
编程语言：NodeJS+ES6/ES7

数据库：mysql

第三方库：Express+Sequelize

二、项目目录结构
 bin : 存放启动项目的脚本文件
 config : 配置文件
 model : 存放dao文件,负责和数据库交互
 service : 存放service文件,负责和dao交互
 routers : 存放controller文件,负责和service交互
 app.js : 项目入口文件
 

1、Sequelize依賴
    npm install --save sequelize
    npm install --save mysql
http://docs.sequelizejs.com/manual/getting-started.html
2、
