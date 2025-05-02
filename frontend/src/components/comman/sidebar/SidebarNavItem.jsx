import React from "react";
import { NavLink } from "react-router-dom";

const SidebarNavItem = ({ to, icon: Icon, label, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-md transition hover:bg-slate-700 ${
          isActive ? "bg-slate-500 text-white" : "text-gray-300"
        }`
      }
    >
      <Icon size={20} />
      <span>{label}</span>
    </NavLink>
  );
};

export default SidebarNavItem;
