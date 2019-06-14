#!/usr/bin/env node  //表明是 node 可执行文件
/**
 * Module dependencies.
 */

//引入我们上面导出的app实例
var app = require('../app');
//引入debug模块，打印调试日志
var debug = require('debug')('myapp:server');
var http = require('http');
//引入配置文件
var config = require('.././config/config');

// var https = require('https');
// var fs = require('fs');
// var path = require('path');
// var httpsOpt = {
//   key : fs.readFileSync(path.join(path.dirname(__dirname),'public/httpsCert/214099849550308.key')),
//   cert : fs.readFileSync(path.join(path.dirname(__dirname),'public/httpsCert/214099849550308.pem'))
// };
/**
 * Get port from environment and store in Express.
 */

// var port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
//var server = https.createServer(httpsOpt,app);
/**
 * Listen on provided port, on all network interfaces.
 */
var port = normalizePort(config.port || '3000');
console.log('当前运行环境为：'+config.env);
console.log("当前运行端口：" + config.port)

server.listen(port,'127.0.0.1',()=>{
    const host = server.address().address;
    console.log("应用实例，访问地址为 https://%s:%s", host, config.port)
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
//HTTP异常事件处理函数
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}