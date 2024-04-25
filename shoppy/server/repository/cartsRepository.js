/* 장바구니리스트 */

import { promises as fsPromises } from "fs"; /* 전체파일을 읽어옴 */

export const getCarts = (items) => {
  const path = "data/product.json";
  const cartList = fsPromises
    .readFile(path, "utf-8")
    .then((data) => {
      const products = JSON.parse(data);
      const updateCartItems = items.map((item, index) => {
        // cid: index+1,
        const product = products.find((product) => product.id === item.id);
        if (product) {
          return {
            ...item,
            image: product.image,
            name: product.name,
            price: product.price,
            info: product.info,
          };
        }
        return item;
      });
      return updateCartItems;
    })
    .catch((error) => console.log(error));
};
