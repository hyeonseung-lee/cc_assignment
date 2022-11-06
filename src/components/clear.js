import React, { useState } from "react";
import { Modal } from "./modal";

export const Clear = ({ setChats }) => {
  const onClick = () => {
    // setChats([]);
    openModal();
  };
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="flex ml-10">
      <button
        className="flex"
        onClick={onClick}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img
          className="w-5 h-5 mr-1"
          src={require("assets/loader.png")}
          alt="Your Company"
        />
        <p className="font-main not-italic font-normal	text-base	text-text_color">
          Clear Conversation
        </p>
      </button>
      <Modal open={modalOpen} close={closeModal} setChats={setChats}>
        Are you sure you want to clear this conversation?
      </Modal>
    </div>
  );
};
