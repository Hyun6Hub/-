import * as repository from "../repository/productRepository.js";
/* 개별 상품 전송 */

export const getProduct = async (req, res, next) => {
  const product = await repository.getProduct(req.params.id);
  res.json(product);
  res.end();
};
/* 호출바로할거면 쓰기 */

/* 전제  상품 전송 */
export const getProducts = async (req, res, next) => {
  /* 넥스트왜붙 */
  /* 비동기화로  */
  const products = await repository.getProducts();
  res.json(products); /* 데이터에있으니까 레파지토리 통해서가져옴 */
  res.end();
};
