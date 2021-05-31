const User = require('../models/User');

module.exports = {
	async index(req, res) {
		let where = {};

		for (index in req.query) {
			if (req.query[index]) {
				where[index] = req.query[index];
			}
		}

		const users = await User.findAll({ where: where });

		if (users.length == 1)
			return res.json(users[0]);

		return res.json(users);
	},

	async store(req, res) {
		const body = req.body;
		body.id = null;

		const user = await User.create(body);

		return res.json(user);
	},

	async update(req, res) {
		const { user_id } = req.params;
		const body = req.body;

		const user = await User.findByPk(user_id);

		if (!user) {
			return res.status(400).json({ error: 'User not found, alguém desconfigurou!' });
		}

		for (index in body) {
			user[index] = body[index];
		}

		await user.save();

		return res.json(user);
	},

	async delete(req, res) {
		const { user_id } = req.params;

		const user = await User.findByPk(user_id);

		if (!user) {
			return res.status(400).json({ error: 'User not found, alguém desconfigurou!' });
		}

		await user.destroy();

		return res.json({sucess: 'Sucesso na exclusão'});
	},

	async deleteAll(req, res) {
		await User.destroy({
			where: {},
			truncate: true
		});

		return res.json({sucess: 'Sucesso na exclusão geral'});
	}
}