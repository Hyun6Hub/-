import { promises as fsPromises } from "fs";

/* 개별상품 읽어오기 */
export const getProduct = (id) => {
  const path = "data/product.json";
  /* 파일경로 설정 */
  const products = fsPromises
    /* 메서드를 사용해 파일 읽기 */
    .readFile(path, "utf-8")
    .then((data) => {
      const jsonData = JSON.parse(data);
      /* 전체는 통째로 전체에서 개별찾는건 로직늘어나서 json으로바꾸고 바꾼거에서찾기  */
      const product = jsonData.filter((item) => item.id === id);
      /* 요청된 id와 일치하는 상품찾기 */
      return product[0];
      /* 찾은상품 반환 */
    })
    .catch((error) => console.log(error));
  return products;
};

/* 전체상품읽어오기 */
export const getProducts = () => {
  const path = "data/product.json";
  const products = fsPromises
    .readFile(path, "utf-8")
    .then((data) => JSON.parse(data))
    .catch((error) => console.log(error));
  return products;
};
