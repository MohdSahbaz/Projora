import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { IoMdNotificationsOutline, IoIosSearch } from "react-icons/io";
import { FaUserTie, FaBars } from "react-icons/fa6";

import Sidebar from "../sidebar/Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="bg-[#1E293B] text-white px-6 py-3 flex justify-between items-center shadow-md">
        {isSidebarOpen && (
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}
        {/* Hamburger + Logo*/}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="block focus:outline-none cursor-pointer"
            aria-label="Toggle navigation"
          >
            <FaBars size={24} />
          </button>
          <h1 className="text-2xl font-semibold tracking-wide">Projora</h1>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Link to={"/search"}>
            <IoIosSearch
              size={24}
              className="cursor-pointer hover:text-blue-400 transition"
              title="Search"
            />
          </Link>
          <Link to={"/notifications"}>
            <IoMdNotificationsOutline
              size={24}
              className="cursor-pointer hover:text-blue-400 transition"
              title="Notifications"
            />
          </Link>
          <Link to="/profile">
            <FaUserTie
              size={24}
              className="cursor-pointer hover:text-blue-400 transition"
              title="Profile"
            />
          </Link>
        </div>
      </header>

      <div className="flex">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Header;
