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
    <div className="flex relative">
      <SideBar setIsOpen={setIsSideBarOpen} isOpen={isSideBarOpen} />
      <main
        style={{
          width: isSideBarOpen ? "calc(100% - 300px)" : "calc(100% - 90px)",
        }}
      >
        <article className="h-screen overflow-y-auto">
          <Outlet />
        </article>
      </main>
    </div>
  );
};

export default Layout;
