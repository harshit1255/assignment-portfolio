import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Layout;
