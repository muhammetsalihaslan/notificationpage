import Image from "next/image";
import React from "react";

const MessagePart = () => {
  return (
    <div>
      <div className="p-2 flex mt-5 justify-between  ">
        <div className="flex">
          <div>
            <Image
              src="/images/avatar-angela-gray.webp"
              width={50}
              height={50}
            />
          </div>
          <div className="p-1">
            <div className="flex gap-x-3">
              <h1 className=" font-bold hover:text-[#0A317B] cursor-pointer ">
                Angela Gray
              </h1>
              <p className="text-slate-400 cursor-default ">Followed you</p>
              <p className="font-bold text-slate-600 hover:text-[#0A317B] cursor-pointer ">
                massage
              </p>
            </div>
            <div className="text-sm text-slate-300 cursor-default">1m Ago</div>
          </div>
        </div>
        <div className="me-[3rem] relative">
          <Image
            src="/images/image-chess.webp"
            width={45}
            height={45}
            className=" cursor-pointer transition-transform transform hover:scale-110 hover:border-4 hover:rounded-md"
          />
        </div>
      </div>
      <div className="border text-sm ms-[4rem] me-[3rem] p-2 rounded-md cursor-pointer hover:bg-sky-100">
        <p>
          Hello, thanks for setting up the Chess Club. I've been a member for a
          few weeks now and I'm already having lots of fun and improving my game
        </p>
      </div>
    </div>
  );
};

export default MessagePart;
