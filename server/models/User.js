const { Model, DataTypes } = require('sequelize');

class User extends Model {
	static init(connection) {
		super.init({
			nome: DataTypes.STRING,
			classe: DataTypes.STRING,
			raca: DataTypes.STRING,
		}, {
			sequelize: connection
		});
	}
}

module.exports = User;