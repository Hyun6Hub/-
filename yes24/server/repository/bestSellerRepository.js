import { promises as fsPrommises } from "fs";
/* 종합베스트셀러 */
export const getBestSeller = (type) => {
  //파일읽기
  const path = "data/best_book_all.json";
  const books = fsPrommises
    .readFile(path, "utf-8")
    .then((data) => {
      //   console.log("data-->", data);
      const jsonDate = JSON.parse(data);
      return jsonDate[
        type
      ]; /* []대괄호쓰는게 변수전체로 받으려고 ()쓰면 없는거 찾게됨*/
    })
    .catch((error) => console.log(error));
  //객체리턴
  return books;
};
