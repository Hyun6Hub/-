import express from "express";
import * as controller from "../controller/realTimeController.js";

const router = express.Router();

//realTime
router.get(
  "/",
  controller.getrealTime
); /* 메소드 구현 직접처리하지않고 컨트롤러로 넘김 */

export default router;
