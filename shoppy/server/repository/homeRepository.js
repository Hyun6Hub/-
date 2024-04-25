import { promises as fsPromises } from "fs";

export const getHome = () => {
  const path = "data/product.json";
  const products = fsPromises
    .readFile(path, "utf-8")
    .then((data) => {
      return JSON.parse(data);
    })
    .catch((error) => console.log(error));
  return products;
};

// .then((data) => {
//     const jsonData = JSON.parse(data);
//변수선언을 안하고 직접 리턴을 해도됨 data가 jsonData로 들어가니까
