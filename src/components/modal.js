import React from "react";

export const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, setChats } = props;
  const onClick = () => {
    setChats([]);
    close();
  };
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section className="flex flex-col justify-between">
          <main className="ml-4.8 mr-4 text-center mt-16.7 font-main font-normal text-base">
            {props.children}
          </main>
          <div className="mb-7.1">
            <button
              className="btn rounded-lg font-main font-normal text-base text-center bg-cancel ml-6 mr-3"
              onClick={close}
            >
              Cancel
            </button>
            <button
              className="btn rounded-lg font-main font-normal text-base text-center bg-clear text-white mr-6"
              onClick={onClick}
            >
              Clear
            </button>
          </div>
        </section>
      ) : null}
    </div>
  );
};
