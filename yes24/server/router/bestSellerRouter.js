import express from "express";
import * as controller from "../controller/bestSellerController.js";

const router = express.Router();

// bestSeller
router.get("/", controller.getBestSeller);
router.get("/:type", controller.getBestSeller); /* 함수 전달해야하니까  */

export default router;
