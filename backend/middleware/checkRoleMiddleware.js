const {
	verifyToken,
	decryptToken
} = require("../utils/jwt");
const {User} = require("../models/models");
const ApiError = require("../error/ApiError");

function checkRole(role) {
	return function (req, res, next) {
		const token = req.cookies.jwt;
		if (!verifyToken(token)) {
			return next(ApiError.unauthorizedError('Нет доступа'));
		}
		const userId = decryptToken(token);
		User.findOne({where: {id: userId}})
			.then((user) => {
				if (user.dataValues.role !== role) {
					
					throw ApiError.forbidden("Нет доступа");
				}
				req.user = user;
				next();
			})
			.catch(next);
	};
}

// eslint-disable-next-line consistent-return

module.exports = {
	checkRole,
};
