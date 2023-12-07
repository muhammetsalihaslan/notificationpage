import Image from "next/image";
import React from "react";

const MessagePart = () => {
  return (
    <div className="p-2 flex mt-5  ">
      <div>
        <Image src="/images/avatar-angela-gray.webp" width={50} height={50} />
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
  );
};

export default MessagePart;
