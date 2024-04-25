import * as repository from "../repository/bestSellerRepository.js";

/* 종합베스트셀러 */

export const getBestSeller = async (req, res) => {
  /* async는 순서지켜야함 */
  //전송하는 데이터 준비
  const type = req.params.type;
  console.log("type--> ", type); /* 타입에 해당하는 북 받음 */
  const books = await repository.getBestSeller(type); /* 받아야하니까 */
  res.json(books);
};
