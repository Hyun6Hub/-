import express from "express";
import * as controller from "../controller/productController.js";

const router = express.Router();

router.get("/all", controller.getProducts).get("/:id", controller.getProduct);
/* 체이닝하면 라우터지워도됨 */

// router.get("/all", (req, res, next) => {
//   res.send("/product/detail");
//   res.end();
// });
export default router;

/* 
all : 모든 상품
detail : 개별 상품
new : 새로운 상품
*/
