import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../store/auth";

const AdminLayout = () => {
  return (
    <>
      <header className="adminHeader">
        <nav className="adminNav">
          <ul className="adminUl">
            <li className="adminLi">
              <NavLink to="/admin/users">
                <FaUser /> Users
              </NavLink>
            </li>
            <li className="adminLi">
              <NavLink to="/admin/contacts">
                <IoMdContacts /> Contact
              </NavLink>
            </li>
            <li className="adminLi">
              <NavLink to="/admin/services">
                <FaRegListAlt /> Services
              </NavLink>
            </li>
            <li className="adminLi">
              <NavLink to="/admin/">
                <FaHome /> Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
