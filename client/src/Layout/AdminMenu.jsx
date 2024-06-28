import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="text-center">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h4 className="text-lg font-bold mb-4">Admin Panel</h4>
        <nav className="space-y-2">
          <NavLink
            to="/dashboard/admin/create-category"
            className="block py-2 px-4 rounded-lg text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition duration-300"
            activeClassName="bg-blue-500 text-white"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="block py-2 px-4 rounded-lg text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition duration-300"
            activeClassName="bg-blue-500 text-white"
          >
            Create Product
          </NavLink>
          {/* <NavLink
            to="/dashboard/admin/products"
            className="block py-2 px-4 rounded-lg text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition duration-300"
            activeClassName="bg-blue-500 text-white"
          >
            Products
          </NavLink> */}
          {/* <NavLink
            to="/dashboard/admin/users"
            className="block py-2 px-4 rounded-lg text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition duration-300"
            activeClassName="bg-blue-500 text-white"
          >
            Users
          </NavLink> */}
          <NavLink
            to="/dashboard/admin/users"
            className="block py-2 px-4 rounded-lg text-gray-800 hover:bg-gray-100 hover:text-gray-900 transition duration-300"
            activeClassName="bg-blue-500 text-white"
          >
            Users
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default AdminMenu;
