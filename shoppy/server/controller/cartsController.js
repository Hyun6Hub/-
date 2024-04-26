import * as repository from "../repository/cartsRepository.js";

export const getCarts = async (req, res) => {
  /* 비동기 함수 정의하고 내보냄 요청객체, 응답객체 매개변수로 받음 */
  const { items } = req.body;
  /* req의 body속성에서 item을 추출하여 상수 item에 할당 */
  const cartsList = await repository.getCarts(items);
  /* 레포지터리 이 이름으로 만들고 아이템받아야함 */
  /* items이 파라미터로 들어가야 새로운 카트리스트 출력됨 */
  res.json(cartsList);
  res.end();
};
