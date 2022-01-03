const UserModel = require('../models/userModel');

export const getUsers = async (req, res, next) => {
	try {
		const users = await User.findAll();
		res.status(200).send({
			status: 200,
			message: 'Users successfully found!',
			data: users,
		});
	} catch (err) {
		console.error(err);
	}
};

export const getUserById = async (req, res, next) => {
    try {
        const user = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.status(200).send({
			status: 200,
			message: 'User successfully found!',
			data: user,
		});
    } catch (err) {
        console.error(err);
    }
}

export const createUser = async (req, res, next) => {
    try {
        await user.create(req.body);
        res.status(200).send({
			status: 200,
			message: 'User successfully created!'
		});
    } catch (err) {
        console.error(err);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        await user.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).send({
			status: 200,
			message: 'User successfully updated!'
		});
    } catch (err) {
        console.error(err);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        await user.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).send({
			status: 200,
			message: 'User successfully deleted!'
		});
    } catch (err) {
        console.error(err);
    }
}