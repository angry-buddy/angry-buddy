import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className='header'>
      <img src='./icon.png' alt='심심이' className='header-img'></img>
      <Link to="/" className="header-title">앵그리 버디</Link>
    </div>
  );
}
