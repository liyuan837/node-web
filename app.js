import express from 'express'
import logger from 'morgan'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import multipart from 'connect-multiparty'
import compression from 'compression'
//配置express中间件
const app = express()
app.set('json spaces', 2)
//加载日志中间件，定义日志和输出级别
app.use(logger('dev'))
//加载解析json的中间件,接受json请求
app.use(bodyParser.json())
//加载解析urlencoded请求体的中间件
app.use(bodyParser.urlencoded({extended: true}))
app.use(multipart())
app.use(compression())
//加载解析cookie的中间件
app.use(cookieParser())
//静态文件目录设置,设置public文件夹为存放静态文件的目录
app.use('/public', express.static('public'))
// 全局拦截配置CROS
app.all('*',function(req,res,next){
	res.header('Access-Control-Allow-origin','*')
	res.header('Access-Control-Allow-Headers','accept, origin, X-Requested-With, content-type, token, userId')
	res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS')
	res.header('Content-Type','application/json;charset=utf-8')
	res.header('Access-Control-Allow-Credentials','true')
	next()
})
// 路由列表
app.use('/person', require('./routes/personCtrl'))
app.use('/company', require('./routes/companyCtrl'))
// 错误处理中间件
app.use(function(req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  res.json({error:err})
})
app.use(errorHandler);
function errorHandler(err, req, res, next) {
	console.error(err)
	res.json({error: err})
}
module.exports = app
