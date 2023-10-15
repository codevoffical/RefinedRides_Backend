import express from "express";
const router = express.Router();
import { urlConstants as url } from "../constants/urlConstants.js";
import { signUp } from "../controllers/authController.js";

router.post(url.signUp, async (req, res, next) => {
	try {
		const result = await signUp({ req });
	} catch (error) {
		next(error);
	}
});

export default router;