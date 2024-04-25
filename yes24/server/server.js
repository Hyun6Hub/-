import express from "express";
import cors from "cors";
import bestSellerRouter from "./router/bestSellerRouter.js";
// import realTimeRouter from "./router/realTimeRouter.js";

const server = express();
const port = 8080;

/* 서버의 공통적인 작업 처리 미들웨어 정의 */
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

/* 요청에 대한 미들웨어 정의 */
server.use("/", bestSellerRouter);
// server.use("/realTime", realTimeRouter); /* 루트로 쓸거니까 */

server.listen(port, () => {
  console.log(`server start--->>${port}`);
});
