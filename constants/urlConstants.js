const config = require("../config/config");

module.exports = {
	signUp: config.basePath("/auth/signup")
};

console.log(module.exports.signUp);
