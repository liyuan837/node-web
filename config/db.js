import Sequelize from 'sequelize'

var config = require('.././config/config');
var my_config = config.mysql_config
//mysql数据库配置
const sequelize = new Sequelize(my_config['database'], my_config['user'], my_config['pwd'], {
	host:my_config['host'],
	dialect: 'mysql',
	pool:my_config['pool']
})
//数据库连接
sequelize.authenticate().then(() => {
    console.log('数据库连接成功...')
}).catch(err => {console.error('数据库连接失败...', err)})
module.exports = sequelize