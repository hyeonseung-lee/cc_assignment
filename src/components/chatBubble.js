import React from "react";

export const MyChat = ({ text }) => {
  return (
    <div className="w-full flex justify-end">
      <span className="max-w-maxChat font-chat text-base font-normal bg-message rounded-l-lg rounded-tr-lg px-3 py-2 mt-2.5 text-white">
        {text}
      </span>
    </div>
  );
};
export const BotChat = ({ text }) => {
  const name = "{BotName}";
  return (
    <div className="w-full flex justify-start">
      <img
        className="w-5 h-5 mr-2.5 my-0.5"
        src={require("assets/model_img.png")}
        alt="Bot"
      />
      <div className="">
        <p className="font-chat mb-1 text-xs font-normal">{name}</p>
        <div className="flex">
          <span className="max-w-maxChat font-chat text-base font-normal bg-white rounded-r-lg rounded-bl-lg px-3 py-2 text-text_color">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};
