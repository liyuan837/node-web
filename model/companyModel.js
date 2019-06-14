import Sequelize from 'sequelize'
import BaseModel from './baseModel.js'
class CompanyModel extends BaseModel{
	constructor(){
		super('companys', {
			cname:{
				type: Sequelize.STRING,
				allowNull:false
			},
			size:{
				type: Sequelize.INTEGER
			},
			address:{
				type: Sequelize.STRING
			}
		})
		this.model = super.getModel()
		//如果进行实体绑定的时候表不存在，自动创建
		// this.model.sync()
	}
}
module.exports = new CompanyModel()