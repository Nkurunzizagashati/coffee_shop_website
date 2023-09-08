import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [activeLink, setActiveLink] = useState("Home");
  return (
    <>
      <div className=" fixed top-0 hidden md:flex h-20 w-full p-10 bg-gray-900 justify-between items-center text-white z-[999] font-courgette text-2xl">
        <h1 className=" text-3xl text-cyan-500">BQCoffee</h1>
        <div className=" flex gap-6">
          <Link
            to="/"
            className={` hover:underline ${
              activeLink === "Home" ? "underline" : ""
            }`}
            onClick={() => {
              setActiveLink("Home");
            }}
          >
            Home
          </Link>
          <Link
            to="/admin"
            className={` hover:underline ${
              activeLink === "Admin" ? "underline" : ""
            }`}
            onClick={() => {
              setActiveLink("Admin");
            }}
          >
            Admin
          </Link>
        </div>
      </div>
      <div className=" md:hidden h-screen absolute right-0 w-[250px] flex-col p-10 bg-gray-900 justify-between items-center text-white flex z-[999] font-courgette text-2xl">
        <h1>BQCoffee</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/register">Signup</Link>
          <Link to="/login">Signin</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
