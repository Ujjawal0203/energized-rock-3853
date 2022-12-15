import React from "react";
import { Link } from "react-router-dom";
import "./index.css"


const Admin = () => {
  return (
    <div className="admin_heading">
      <Link to={"/add_products"}>ADD PRODUCTS</Link>
      <Link to={"/dashboard"}>DASHBOARD</Link>
    </div>
  );
};

export default Admin;
