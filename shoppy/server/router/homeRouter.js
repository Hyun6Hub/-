import express from "express";
import * as controller from "../controller/homeController.js";

const router = express.Router(); /* 라우팅 관리하기 위해 라우터 객체 생성 */

router.get("/", controller.getHome);
/* 클라이언트가 해당경로로 get요청 보내면 이 핸들러 실행 */
export default router;
