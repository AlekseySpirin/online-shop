const {
	verifyToken,
	decryptToken
} = require("../utils/jwt");
const {User} = require("../models/models");
const {badRequest} = require("../error/ApiError");
// eslint-disable-next-line consistent-return
const auth = (req, res, next) => {
	const token = req.cookies.jwt;
	if (!verifyToken(token)) {
		const error = new Error("Нет доступа");
		error.statusCode = 401;
		return next(error);
	}
	const userId = decryptToken(token);
	User.findOne({where: {id: userId}})
		.then((user) => {
			if (!user) {
				throw badRequest('Пользователь не найден')
			}
			req.user = user;
			next();
		})
		.catch(next);
};
module.exports = {
	auth,
};
