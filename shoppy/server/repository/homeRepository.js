import { promises as fsPromises } from "fs";

export const getHome = () => {
  /* getHome라는 이름으로 내보내기됨 */
  const path = "data/product.json";
  /* 경로에 있는 파일을 읽어오기 위한 경로로 정의 */
  const products = fsPromises
    .readFile(path, "utf-8")
    /* data/product.json 파일을 읽어옴 */
    .then((data) => {
      return JSON.parse(data);
      /* 파일 읽기 완료되면 json형식으로 파싱하여 반환 */
    })
    .catch((error) => console.log(error));
  return products;
  /* 파일 읽기와 json파싱이 완료되면 products반환 */
};

// .then((data) => {
//     const jsonData = JSON.parse(data);
//변수선언을 안하고 직접 리턴을 해도됨 data가 jsonData로 들어가니까
