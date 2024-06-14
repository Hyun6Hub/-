import React, { useEffect } from "react";
import axios from "axios";

const BoardList = () => {
  const getBoardList = async () => {
    const resp = (await axios.get("//locoalhost:8080/board")).data;
    console.log(resp.data);
  };
  return <div>게시판 목록 출력</div>;
};
