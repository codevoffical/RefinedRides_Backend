const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const auth = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const corsOptions = {
	origin: process.env.ORIGIN,
	methods: "GET,PUT,PATCH,POST,DELETE",
	credentials: true // Allow cookies and HTTP authentication information to be included in the request
};
app.use(cors(corsOptions));
app.use("/", auth);

const PORT = process.env.PORT || 8083;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`.bgWhite);
});
