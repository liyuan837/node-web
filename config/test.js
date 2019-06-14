'use strict';
/**
 * 测试环境配置文件
 */
var config = {
    env: 'test', //环境名称
    port: 2222,  //服务端口号
    mysql_config: {
        host:'127.0.0.1',
        database:'test',
        user: 'root',
        pwd: '123456'
    },
    mongodb_config: {
        //mongodb数据库配置
    },
    redis_config: {
        //redis数据库配置
    },
};
module.exports=config;