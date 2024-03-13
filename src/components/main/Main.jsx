import { useState } from "react";
import { FaPen } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import Header from "../header/Header";
import "../../index.css";
const Main = () => {
  const [inputData, setInputData] = useState([
    {
      id: 0,
      title:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
    {
      id: 3,
      title:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
    {
      id: 2,
      title:
        "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
  ]);

  const handleInputChange = (data) => {
    setInputData(data);
  };
  return (
    <div>
      <Header onInputChange={handleInputChange} />
      <main className="w-full">
        <div className="container my-[140px] mx-auto px-[140px]">
          <section className="h-[600px] main__section">
            <div className="border-b border-[#948482] w-full flex justify-between items-center pb-4">
              <p className="text-blue-500 flex gap-3 ">
                Yangi Todo Listlar:{" "}
                <span className="bg-slate-500 text-white w-8 h-8 rounded-3xl"></span>
              </p>
              <p className="text-blue-500 flex gap-3">
                O'chirilgan Todo Listlar:{" "}
                <span className="bg-slate-500 text-white w-8 h-8 rounded-3xl"></span>
              </p>
            </div>
            <div className="">
              <ul className="list-none flex flex-col justify-center gap-5 my-8">
                {inputData.map((item, i) => (
                  <li
                    key="i"
                    className="p-4 rounded-md bg-[#262626] flex justify-start items-center gap-3"
                  >
                    <input type="radio" name="lists" className="radio__title" />
                    {checked
                      ? `<del className="text-white px-12">${item.title}</del>`
                      : `<p className="text-white px-12">{item.title}</p>`}

                    <div className="flex gap-2">
                      <button className="p-4 w-14  h-14 bg-slate-600 flex justify-center items-center text-2xl rounded-md">
                        <FaPen />
                      </button>
                      <button className="p-4 w-14 h-14 bg-slate-600 flex justify-center items-center text-2xl rounded-md">
                        <FaTrash />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <li className="p-4 "></li>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Main;
