import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-x-2 justify-center items-center">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <div className="w-[35px] h-[35px] bg-[#0A317B] text-white flex justify-center items-center rounded-md font-bold">
          0
        </div>
      </div>
      <div className="flex justify-center items-center font-semibold">
        <h1 className="hover:text-[#0A317B] cursor-pointer">
          Mark all as read
        </h1>
      </div>
    </div>
  );
};

export default Header;
