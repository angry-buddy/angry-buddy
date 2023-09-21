import React from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";

export default function Main() {
  return (
    <div className='main'>
      <div className="msg-box">
        <p>대화해보러 가기</p>
      </div>
      <div>
        <Link to='/conv' className='go-btn'>
          입장하기
        </Link>
      </div>
    </div>
  );
}
