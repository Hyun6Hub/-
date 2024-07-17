// src/pages/Board.js
import React, { useState } from "react";

const Board = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "첫 번째 게시글", content: "안녕하세요!" },
    { id: 2, title: "두 번째 게시글", content: "반갑습니다!" },
  ]);

  return (
    <div>
      <h2>게시판</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Board;
