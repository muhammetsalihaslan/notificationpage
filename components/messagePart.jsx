"use client";
import Image from "next/image";
import React, { useState } from "react";
import ProjectData from "/assets/data/project.json";

const MessagePart = () => {
  const [todos, setTodos] = useState(ProjectData);
  const itemsLeft = todos.filter((item) => !item.completed).length;

  const handleClick = (id) => {
    const updatedData = todos.map((project) =>
      project.id === id ? { ...project, completed: true } : project
    );
    setTodos(updatedData);
  };

  const handleMarkAllAsRead = () => {
    const updatedData = todos.map((project) => ({
      ...project,
      completed: true,
    }));
    setTodos(updatedData);
  };
  return (
    <div>
      <div className="flex justify-between w-full">
        <div className="flex gap-x-2 justify-center items-center">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <div className="w-[35px] h-[35px] bg-[#0A317B] text-white flex justify-center items-center rounded-md font-bold">
            {itemsLeft}
          </div>
        </div>
        <div className="flex justify-center items-center font-semibold">
          <h1
            className="hover:text-[#0A317B] cursor-pointer"
            onClick={handleMarkAllAsRead}
          >
            Mark all as read
          </h1>
        </div>
      </div>
      {todos.map((project) => (
        <div
          key={project.id}
          className={
            project.completed
              ? ""
              : "border border-none bg-[#F7FAFD] rounded-md cursor-pointer"
          }
          onClick={() => handleClick(project.id)}
        >
          <div className="p-2 flex mt-5 justify-between  ">
            <div className="flex">
              <div>
                <Image src={project.imageData} width={50} height={50} />
              </div>
              <div className="p-1">
                <div className="flex flex-wrap md:gap-x-3">
                  <h1 className=" font-bold hover:text-[#0A317B] cursor-pointer ">
                    {project.name}
                  </h1>
                  <p className="text-slate-400 cursor-default ">
                    {project.action}
                  </p>
                  <p className="font-bold text-slate-600 hover:text-[#0A317B] cursor-pointer ">
                    {project.where}
                  </p>
                  {project.completed ? (
                    ""
                  ) : (
                    <div className="w-2 h-2 mt-2 bg-red-500 rounded-full ms-2"></div>
                  )}
                </div>
                <div className="text-sm text-slate-300 cursor-default">
                  {project.time}
                </div>
              </div>
            </div>
            <div className="me-[3rem] relative">
              {project.material ? (
                <Image
                  src={project.material}
                  width={45}
                  height={45}
                  className=" cursor-pointer transition-transform transform hover:scale-110 hover:border-4 hover:rounded-md"
                />
              ) : (
                " "
              )}
            </div>
          </div>
          {project.comment ? (
            <div className="border text-sm ms-[4rem] me-[3rem] p-2 rounded-md cursor-pointer hover:bg-sky-100">
              <p>
                Hello, thanks for setting up the Chess Club. I've been a member
                for a few weeks now and I'm already having lots of fun and
                improving my game
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default MessagePart;
