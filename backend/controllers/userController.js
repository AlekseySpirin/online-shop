const ApiError = require('../error/ApiError');
const {User} = require('../models/models');
const {generateToken} = require('../utils/jwt');
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

class UserController {
	async registration(req, res, next) {
		const {
			name,
			email,
			password
		} = req.body;
		if (!email || !password) {
			throw new ApiError.unauthorizedError("Не передан email или пароль");
		}
		
		return await User.findOne({where: {email}})
			.then((user) => {
				if (user) {
					throw new ApiError.conflictError("Пользователь уже существует");
				}
				return bcrypt.hash(password, SALT_ROUNDS, function (err, hash) {
					return User.create({
						name,
						email,
						password: hash,
					}).then((userData) => {
						return res.status(201).send({
							name: userData.name,
							email: userData.email,
						});
					});
				});
			})
			.catch(next);
	}
	
	async login(req, res, next) {
		const {
			email,
			password
		} = req.body;
		if (!email || !password) {
			throw new ApiError.unauthorizedError("Неправильный email или пароль");
		}
		return await User.findOne({
				where: {email},
				attributes: {include: ['password']}
			})
			.then((user) => {
				if (!user) {
					throw new ApiError.unauthorizedError("Такого пользователя не существует");
				}
				return bcrypt.compare(password, user.password, (err, isPasswordMatch) => {
					if (!isPasswordMatch) {
						return res.status(401).send({message: "Неправильный пароль"});
					}
					const token = generateToken(user.dataValues.id);
					
					res.cookie("jwt", token, {
						maxAge: 6048000,
						httpOnly: true,
						sameSite: "none",
						secure: true,
					});
					return res.status(200).send({message: "Авторизация прошла успешно"});
				});
			})
			.catch(next);
	}
	
	async getCurrentUser(req, res, next) {
		const {id} = req.user;
		return User.findOne({where: {id}})
			.then((user) => {
				return res.status(200).send(user);
			})
			.catch(next);
	};
}

module.exports = new UserController();
