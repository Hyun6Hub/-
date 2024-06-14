import React from "react";
import { Link } from
import {Route, Routes} from "react-router-dom"
import axios from "axios"



export default function Header() {
  return (
    <div>
      <header>
        <a href="/">홈</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/board">게시판</Link>
        <hr />
      </header>
    </div>
  );
}
