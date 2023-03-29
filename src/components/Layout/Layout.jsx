import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SideBar from "../global/SideBar";

const Layout = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const darkMode = useSelector((state) => state.global.darkMode);
  useEffect(() => {
    Boolean(darkMode)
      ? document.documentElement &&
        document.documentElement.classList.add("darkMode")
      : document.documentElement.classList.remove("darkMode");
  }, [darkMode]);
  return (
    <div className="flex relative w-screen">
      <SideBar setIsOpen={setIsSideBarOpen} isOpen={isSideBarOpen} />
      <main
        // className={
        //   isSideBarOpen
        //     ? "md:w-[calc(100%-250px)] w-screen border-collapse"
        //     : "md:w-[calc(100%-90px)] w-screen border-collapse"
        // }
        className="flex-1"
      >
        <article className="h-screen overflow-y-auto">
          <Outlet />
        </article>
      </main>
    </div>
  );
};

export default Layout;
