import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Logo from "../../assets/images/logo.svg";
const Header = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState({ text: "", list: [] });

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue({ ...inputValue, text: value });
  };

  const handleAdding = () => {
    onInputChange({ ...inputValue });
  };
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
            onChange={handleChange}
          />
          <button
            className="p-4 w-32 flex justify-start items-center text-white gap-2 rounded-md bg-slate-600 hover:bg-slate-200 hover:text-blue-500 hover:transition"
            onClick={handleAdding}
          >
            <FaPlus />
            Adding
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
