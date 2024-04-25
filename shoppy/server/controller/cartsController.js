import * as repository from "../repository/cartsRepository.js";

export const getCarts = async (req, res) => {
  const { items } = req.body;
  const cartsList = await repository.getCarts(
    items
  ); /* 레포지터리 이 이름으로 만들고 아이템받아야함 */
  /* items이 파라미터로 들어가야 새로운 카트리스트 출력됨 */
  res.json(cartsList);
  res.end();
};
