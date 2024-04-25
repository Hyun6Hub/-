import * as repository from "../repository/bestSellerRepository.js";

/* 실시간베스트셀러 */

export const getrealTime = async (req, res) => {
  /* 비동기처리 async await */
  const books =
    await repository.getBestSeller(); /* 결과를 레파지토리에서 받아서 사용할거 */
  res.json(books);
};
