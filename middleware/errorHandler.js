import { messageConstansts as messages } from "../constants/messageConstants.js";

const errorHandler = (err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const errObj = {
		success: false,
		statusCode,
		message: err.message || messages.something_went_wrong,
		stack: process.env.NODE_ENV === "development" ? err.stack : {}
	};
	console.error("error:".red, errObj);
	res.status(statusCode).json(errObj);
};

export default errorHandler;
