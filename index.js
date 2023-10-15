import express from "express";
import morgan from "morgan";
import dotenv from "dotenv/config";
import colors from "colors";
import cors from "cors"
import auth from "./routes/auth.js";
import errorHandler from "./middleware/errorHandler.js"
import connectDB from "./config/db.js";

const app = express();

app.use(express.json());
app.use(morgan("common"));
app.use(express.urlencoded({ extended: false }));
const corsOptions = {
	origin: process.env.ORIGIN,
	methods: "GET,PUT,PATCH,POST,DELETE",
	credentials: true // Allow cookies and HTTP authentication information to be included in the request
};

app.use(cors(corsOptions));
app.use("/", auth);

const PORT = process.env.PORT || 8083;

app.use(errorHandler);

connectDB();

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`.cyan);
});
