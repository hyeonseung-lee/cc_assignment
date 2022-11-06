import React from "react";

export const Header = () => {
  return (
    <header className="w-screen h-17 absolute">
      <div className="flex ml-5 my-4 items-center">
        <img
          className="h-9 w-9 block"
          src={require("assets/logo.png")}
          alt="Your Company"
        />
        <h2 className="font-main text-2xl font-normal	text-logo">AI chat</h2>
      </div>
    </header>
  );
};
