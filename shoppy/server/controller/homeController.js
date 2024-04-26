import * as repository from "../repository/homeRepository.js";

export const getHome = async (req, res) => {
  /* getHome는 홈페이지 요청 처리하는 비동기 함수 */
  const products = await repository.getHome();
  /* repository.getHome(); 홈페이지에 표시할 제품 데이터를 가져오는 비동기함수 */
  res.json(products);
  /* 가져온 제품데이터를 json형식으로 응답 객체에 전송 */
  res.end();
};
/* 데이터 베이스에서 데이터를 가져오는 함수의 결과를 사용하려면
해당 함수 실행 완료 될 때까지 기다려야함 */
