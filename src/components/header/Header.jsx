import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Logo from "../../assets/images/logo.svg";
const Header = () => {
  return (
    <header className="w-full p-3 bg-[#0d0d0d] h-[222px]">
      <nav className="container mx-auto px-[140px]">
        <a href="#" className="flex justify-center mt-[50px]">
          <img src={Logo} alt="logo svg" />
        </a>
        <div className="mt-[80px] flex gap-2 justify-center">
          <input
            type="text"
            className="w-[736px] bg-[#262626] rounded-md p-4 text-white outline-lime-400"
            placeholder="Adding Todos..."
          />
          <button className="p-4 w-32 flex justify-start items-center text-white gap-2 rounded-md bg-slate-600 hover:bg-slate-200 hover:text-blue-500 hover:transition">
            <FaPlus />
            Yangi todo
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
