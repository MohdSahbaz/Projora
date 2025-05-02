import React from "react";
import { IoMdNotificationsOutline, IoMdHome } from "react-icons/io";
import { FaUserTie, FaBars } from "react-icons/fa6";
import SidebarNavItem from "./SidebarNavItem";

const Sidebar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <>
      <aside className="w-60 h-[calc(100vh-55.98px)] absolute top-[55.98px] left-0 bg-[#1E293B]/[0.95] text-white flex flex-col py-6 px-4">
        {/* Navigation Links */}
        <nav className="flex flex-col gap-2">
          <SidebarNavItem
            to="/"
            icon={IoMdHome}
            label="Home"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
          <SidebarNavItem
            to="/notifications"
            icon={IoMdNotificationsOutline}
            label="Notifications"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
          <SidebarNavItem
            to="/profile"
            icon={FaUserTie}
            label="Profile"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
