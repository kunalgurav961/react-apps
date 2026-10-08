import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 py-2">
      <Link to={"/"}>
        <h1 className="text-3xl font-semibold">LoGo</h1>
      </Link>
      <div className="flex gap-5 justify-center items-center">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <button className="border px-5 py-2 rounded-3xl ">Login</button>
        <button className="border px-5 py-2 rounded-3xl bg-white text-black">SignUp</button>
      </div>
    </div>
  );
}

export default Navbar