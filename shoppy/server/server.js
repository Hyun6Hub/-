import express from "express";
import cors from "cors";
import homeRouter from "./router/homeRouter.js";
import productRouter from "./router/productRouter.js";
import cartsRouter from "./router/cartsRouter.js";

const server = express();
const port = 8080;

/* 공통적인 요청 */
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

server.use("/", homeRouter); /*홈페이지 다루는 라우터  */
server.use("/products", productRouter); /* 제품페이지 서버로 쓰려고 가져옴 */
server.use("/carts", cartsRouter);
// get : req.params, POST : req.body

/* 반복이되면 대표이름 라우터로 */
server.listen(port, () => {
  console.log(`server start ===>> ${port}`);
});
