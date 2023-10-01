const express = require("express");
const router = express.Router();
const urlConstants = require("../constants/urlConstants");
const { auth } = require("../controllers");

router.post(urlConstants.signUp, async (req, res) => {
	try {
		const result = await auth.signUp({ req });
	} catch (error) {}
});

module.exports = router;
