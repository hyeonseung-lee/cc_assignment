import React, { useEffect, useState } from "react";
import { BotChat, MyChat } from "./chatBubble";
import { Clear } from "./clear";
import axios from "axios";

export const Container = () => {
  const [chats, setChats] = useState([]);
  const [typedText, setTypedText] = useState("");

  // get my chat
  const onChange = (e) => {
    const { value } = e.target;
    setTypedText(value);
  };
  // add my chat
  const onClick = async (e) => {
    e.preventDefault();
    setChats([...chats, [typedText, 0]]); // 0 means chats from user.
    console.log(typedText);
  };

  const url =
    "https://main-chatbot-api-ainize-team.endpoint.ainize.ai/v1/bot/chat";

  const postChat = () => {
    axios
      .post(url, { message: typedText })
      .then(function (response) {
        // console.log(response);
        setChats([...chats, [response.data, 1]]);
        setTypedText("");
      })
      .catch(function (error) {
        console.log("error");
        console.log(error);
      });
    // console.log(chats);

    // set scoll to bottom
    var objDiv = document.getElementById("chat_div");
    objDiv.scrollTop = objDiv.scrollHeight;
  };

  useEffect(() => {
    if (chats.length > 0) {
      postChat();
    }
  }, [chats.length]);

  // make chats
  let chatList = [];
  chats.forEach((item, index) => {
    // console.log(chats);
    if (item[1] === 0) {
      chatList.push(<MyChat key={index} text={item[0]} />);
    }
    if (item[1] === 1) {
      chatList.push(<BotChat key={index} text={item[0]} />);
    }
  });

  return (
    <div className="flex items-start absolute mt-19 mb-16.5 ml-45 w-container_w h-container_h ">
      <div className="flex flex-col justify-between bg-char_bg w-conversation_w h-conversation_h rounded-lg p-5">
        <div className="h-auto overflow-auto snap-end	 mb-3" id="chat_div">
          <BotChat text="Hi" />
          {chatList}
        </div>
        <div className="bg-white w-full h-13 rounded-lg flex items-center">
          <form className="w-full h-full flex items-center">
            <input
              className="mx-3 w-full"
              type="text"
              id="text"
              name="text"
              value={typedText}
              onChange={onChange}
            />
            <button onClick={onClick}>
              <img
                className="w-5 h-5 mr-2.5 my-0.5"
                src={require("assets/send.png")}
                alt="send"
              />
            </button>
          </form>
        </div>
      </div>
      <Clear setChats={setChats} />
    </div>
  );
};
