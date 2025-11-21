import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <>
    <div className="flex justify-between  items-center  ">
      <div>
        <img src="/images/Logo/download.png" className="w-40 " alt="" />
      </div>
      <div className="flex  gap-20 font-bold text-[#373739de]">
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/collection"}>
          <p>Collection</p>
        </Link>
        <Link to={"/cart"}>
          <p >Cart</p>
        </Link>
      </div>
    </div>
      {/* <div className="h-0.5 bg-[#3737393f] mt-6 mb-2"></div> */}
      <div className="h-0.5 bg-[#37373933] w-full my-4"></div>

    </>
  );
}

export default Navbar;
