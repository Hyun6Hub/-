import * as repository from "../repository/memberRepository.js";

/* 회원가입 */
export const getSignup = async (req, res) => {
  const formData = req.body;
  const result = await repository.getSignup(formData);
  // console.log(formData.userId); /* .userId입력한게 출력되는지 */
  res.json(result);
  res.end();
};

/* 아이디 중복체크 */
export const getIdCheck = async (req, res) => {
  const { userId } = req.body;

  const result = await repository.getIdCheck(userId);
  res.json(result);
  res.end();
};

/* 
로그인 처리
*/

export const getLogin = async (req, res) => {
  const { userId, userPass } = req.body;
  const result = await repository.getLogin(userId, userPass);
  //   console.log("result -->", result);
  res.json(result);
  res.end();
};
