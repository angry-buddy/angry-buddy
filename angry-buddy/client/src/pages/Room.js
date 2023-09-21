import React, { useState, useEffect, useRef } from "react";
import "../styles/Room.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Room() {
  const [messages, setMessages] = useState([
    {
      text: "안녕하세요? 대화를 주고받는 ai입니다. 제게 말을 걸어주세요.",
      user: "buddy",
    },
  ]);
  const [mymsg, setMymsg] = useState("");
  const [conversationEmojis, setConversationEmojis] = useState({
    "긍정)": "😊",
    "중립)": "😑",
    "부정)": "😡",
  });
  const conversationRef = useRef(null);

  const handleOnClick = async (e) => {
    e.preventDefault();

    const params = {
      message: mymsg,
    };
    console.log(params, "clicked");

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/chat",
        params
      );
      console.log(response);
      const newResponse = response.data?.message.split("(")[0];
      const emotion = response.data?.message.split("(")[1];

      const newMessages = [
        ...messages,
        { text: mymsg, user: "my" },
        { text: newResponse + conversationEmojis[emotion], user: "buddy" },
      ];
      setMessages(newMessages);
      setMymsg("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className='room'>
      <div className='conversation-area' ref={conversationRef}>
        {messages.map((message, index) => (
          <li key={index} className={`${message.user}-msg`}>
            {message.text}
          </li>
        ))}
      </div>
      <div className='bottom-area'>
        <form onSubmit={handleOnClick}>
          <input
            type='text'
            className='input-text'
            placeholder='이곳에 입력해주세요'
            value={mymsg}
            onChange={(e) => setMymsg(e.target.value)}
          />
          <button type='submit' className='icon-btn'>
            <FontAwesomeIcon
              icon={faPaperPlane}
              className='icon'
              onClick={handleOnClick}
              size='2x'
            />
          </button>
        </form>
      </div>
    </div>
  );
}
