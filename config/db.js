const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URL);
		console.log("Database connected successfully".white);
		console.log(`${conn.connection.name} : ${conn.connection.host}`.magenta);
	} catch (error) {
		console.error(`DB connection error: ${error.message}`);
		throw new Error(error);
	}
};

module.exports = { connectDB };
