import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BoardList() {  
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);

  useEffect(()=>{
    const url = 'http://localhost:8080/board/list';
    axios({
      method : 'get',
      url : url
    })
      .then((result) => setBoardList(result.data))
      .catch(error => console.log(error));
  }, []);
  
  // console.log('boardList => ', boardList );

    return (
      <div className='content'>
        <h1>게시판</h1>
        <table border='1'>
          <tr>
            <td colSpan={4}>
              <Link to="/board/new">
                <button type="button">글쓰기</button>
              </Link>
            </td>
          </tr>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>조회수</th>
            <th>등록일자</th>
          </tr>
          {boardList.map((board) => (
            <tr>
              <td>{board.rno}</td>
              <td><Link to={`/board/${board.bid}/${board.rno}`}>{board.btitle}</Link></td>              
              <td>{board.bhits}</td>
              <td>{board.bdate}</td>
            </tr>
          ))}              
        </table>
      </div>
    );
}