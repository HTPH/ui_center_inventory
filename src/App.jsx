import React, { useState, useEffect } from "react";
const imgBgMain = "./src/assets/assets/bgmain.png";
const shortcutleft = "./src/assets/assets/shortcutleft.png";
const hovercatagoryfocus = "./src/assets/assets/catagoryfocus.png";
const itembox = "./src/assets/assets/itembox.png";
const itemboxleft = "./src/assets/assets/itemboxleft.png";
const pathitems = "./src/assets/items";
import "./App.css";
function App() {
  const [Catagory, setCatagory] = useState("ALL");
  const [NameSearch, setNameSearch] = useState("");
  const [renderItem, setRenderItem] = useState([]);
  const [SlotNumber, setSlotNumber] = useState(1);
  const dataitem = [
    {
      name: "phone",
      label: "โทรศัพท์",
      count: 1,
      limit: 1,
    },
    {
      name: "money",
      label: "เงิน",
      count: 1,
      limit: -1,
    },
    {
      name: "black_money",
      label: "เงินดำ",
      count: 1,
      limit: -1,
    },
    {
      name: "keys",
      label: "กุญแจ",
      count: 1,
      limit: -1,
    },
    {
      name: "armor",
      label: "ชุดเกราะ",
      count: 15,
      limit: 15,
    },
    {
      name: "drug",
      label: "ยาเสพติด",
      count: 7,
      limit: 10,
    },
    {
      name: "gold",
      label: "ทองคำ",
      count: 45,
      limit: 45,
    },
  ];
  useEffect(() => {
    if (NameSearch === "") {
      setRenderItem(dataitem);
    } else {
      const lower = NameSearch.toLowerCase();
      const result = dataitem.filter(
        (item) =>
          item.name.toLowerCase().startsWith(lower) ||
          item.label.startsWith(lower)
      );
      setRenderItem(result);
    }
  }, [dataitem, NameSearch]);
  return (
    <div className="w-[80.85vh] h-[69.1vh] setcenter ">
      <div className="w-[69.25vh] h-[69.1vh] absolute right-0">
        <img src={imgBgMain} className="w-[69.25vh] h-[69.1vh]" />
        {/* Catagory */}
        <div className="w-[45.8vh] text-[#9E9E9E] h-[2.4vh] text-[1vh]  absolute top-[4.8vh] left-[1vh] flex justify-evenly items-center   ">
          <div
            className="transition-all flex items-center justify-center z-10"
            onClick={() => setCatagory("ALL")}
          >
            {Catagory === "ALL" ? (
              <img
                src={hovercatagoryfocus}
                className="w-[7vh] h-[2.4vh] absolute  z-[-1]"
              />
            ) : null}
            <span
              className={`z-[999] ease-in-out duration-300  hover:scale-110 cursor-pointer ${
                Catagory === "ALL" ? "text-white" : ""
              }`}
            >
              ALL
            </span>
          </div>
          <div
            className="transition-all flex items-center justify-center z-10"
            onClick={() => setCatagory("KEY")}
          >
            {Catagory === "KEY" ? (
              <img
                src={hovercatagoryfocus}
                className="w-[7vh] h-[2.4vh] absolute  z-[-1]"
              />
            ) : null}
            <span
              className={`z-[999] ease-in-out duration-300  hover:scale-110 cursor-pointer ${
                Catagory === "KEY" ? "text-white" : ""
              }`}
            >
              KEY
            </span>
          </div>
          <div
            className="transition-all flex items-center justify-center  z-10"
            onClick={() => setCatagory("ILLEGA")}
          >
            {Catagory === "ILLEGA" ? (
              <img
                src={hovercatagoryfocus}
                className="w-[7vh] h-[2.4vh] absolute  z-[-1]"
              />
            ) : null}
            <span
              className={`z-[999] ease-in-out duration-300  hover:scale-110 cursor-pointer ${
                Catagory === "ILLEGA" ? "text-white" : ""
              }`}
            >
              ILLEGA
            </span>
          </div>
          <div
            className="transition-all flex items-center justify-center z-10"
            onClick={() => setCatagory("FASHION")}
          >
            {Catagory === "FASHION" ? (
              <img
                src={hovercatagoryfocus}
                className="w-[7vh] h-[2.4vh] absolute  z-[-1]"
              />
            ) : null}
            <span
              className={`z-[999] ease-in-out duration-300  hover:scale-110 cursor-pointer ${
                Catagory === "FASHION" ? "text-white" : ""
              }`}
            >
              FASHION
            </span>
          </div>
          <div
            className="transition-all flex items-center justify-center  z-10"
            onClick={() => setCatagory("WEAPON")}
          >
            {Catagory === "WEAPON" ? (
              <img
                src={hovercatagoryfocus}
                className="w-[7vh] h-[2.4vh] absolute  z-[-1]"
              />
            ) : null}
            <span
              className={`z-[999] ease-in-out duration-300  hover:scale-110 cursor-pointer ${
                Catagory === "WEAPON" ? "text-white" : ""
              }`}
            >
              WEAPON
            </span>
          </div>
        </div>
        {/*  */}
        {/* ID */}
        <div className="w-[20.7vh] h-[2.45vh] flex items-center justify-around absolute top-[4.8vh] right-[1.3vh] ">
          <span className="kanit-regular absolute left-[2.2vh] text-[#B2B2B2] text-[1.2vh]">
            เลขกระเป๋าของคุณ
          </span>
          <span className="text-[#fff] font-bold absolute right-[2.2vh] top-[0.4vh] text-[1.2vh]">
            ID : <span className="text-[#38E1FF]">1233</span>
          </span>
        </div>
        {/*  */}
        {/* Search */}
        <input
          className="kanit-regular w-[17vh] h-[3vh] text-white outline-none flex items-center px-[.8vh] absolute left-[1.5vh] top-[1vh] text-[1.5vh]"
          placeholder="SEARCH"
          onChange={(e) => setNameSearch(e.target.value)}
        />
        {/*  */}
        <div className="w-[66.8vh] h-[58.4vh] absolute right-[1.4vh] bottom-[2.3vh] p-[.7vh]  grid grid-cols-6 auto-rows-[7.3vh]  gap-[.7vh] gap-y-[5vh]  overflow-y-scroll scroll-smooth ">
          {renderItem.map((item) => {
            return (
              <div
                key={item.name}
                className="w-[10.5vh] h-[11.5vh] cursor-pointer relative transition-all duration-300 hover:scale-105 z-10 text-center font-bold flex flex-row justify-center items-center"
              >
                <img
                  src={itembox}
                  className="w-[10.5vh] h-[11.5vh] absolute -z-1"
                />
                <img
                  src={`${pathitems}/${item.name}.png`}
                  className="w-[7vh] h-[7vh]"
                />
                <span className="text-[#B1B1B1] text-[1.2vh] absolute bottom-[.6vh] kanit-regular">
                  {item.label}
                </span>
                <span className="text-[#C4EFFF] text-[1.2vh] absolute top-[.3vh] left-[4.5vh] kanit-regular">
                  {item.count}
                  {item.limit !== -1 ? `/${item.limit}` : ""}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[12.569vh] h-[68.362vh] absolute left-[.7vh] bottom-0 flex flex-col items-center  ">
        <img src={shortcutleft} className="w-[12.569vh] h-[68.362vh]" />
        <div className="w-[9.8vh] h-[67.5vh] absolute left-[.4vh] bottom-[1vh] flex  justify-center ">
          <div className="w-[7.8vh] h-[1.7vh]  text-white kanit-regular  text-[1.4vh]  absolute -bottom-[.1vh] right-[.7vh] rounded-[.4vh] bg-black/80 flex items-center">
            <button
              onClick={() => setSlotNumber(1)}
              className={
                ` left-[.3vh] absolute w-[4vh] h-[1.2vh] flex justify-center items-center ${SlotNumber === 1 ? `bg-linear-to-t from-[#6CF0FF] to-[#0B6EA7] rounded-[.3vh] transition-all duration-200 `:`cursor-pointer transition-all duration-200  `} `
                 
              }
            >
              I
            </button>
            <button
              onClick={() => setSlotNumber(2)}
              className={
                 ` right-[.3vh] absolute w-[4vh] h-[1.2vh]  flex justify-center items-center ${SlotNumber === 2 ? `bg-linear-to-t from-[#6CF0FF] to-[#0B6EA7] rounded-[.3vh] transition-all duration-200 `:`cursor-pointer transition-all duration-200  `} `
              }
            >
              II
            </button>
          </div>
          <div className="w-[9.374vh] h-[8.627vh] absolute rounded-[.7vh] top-[2.263vh]  flex text-left p-[.4vh] ">
            <span className="text-[1.4vh] relative -left-[.3vh] -top-[.3vh] kanit-regular font-bold  text-[#A2E6FF]">
              1
            </span>
            <div className="w-[8.4vh] h-[8.627vh]  cursor-pointer hover:scale-105 ease-in-out duration-300 ">
              <img
                src={itemboxleft}
                className="w-[8.4vh] h-[8.627vh] opacity-80"
              />
            </div>
          </div>
          <div className="w-[9.374vh] h-[8.627vh] absolute rounded-[.7vh] top-[11.409vh] flex text-left p-[.4vh] ">
            <span className="text-[1.4vh] relative -left-[.3vh] -top-[.3vh] kanit-regular font-bold  text-[#A2E6FF]">
              2
            </span>
            <div className="w-[8.4vh] h-[8.627vh]  cursor-pointer hover:scale-105 ease-in-out duration-300 ">
              <img
                src={itemboxleft}
                className="w-[8.4vh] h-[8.627vh] opacity-80"
              />
            </div>
          </div>
          <div className="w-[9.374vh] h-[8.627vh] absolute rounded-[.7vh] top-[20.455vh]  flex text-left p-[.4vh] ">
            <span className="text-[1.4vh] relative -left-[.3vh] -top-[.3vh] kanit-regular font-bold  text-[#A2E6FF]">
              3
            </span>
            <div className="w-[8.4vh] h-[8.627vh]  cursor-pointer hover:scale-105 ease-in-out duration-300 ">
              <img
                src={itemboxleft}
                className="w-[8.4vh] h-[8.627vh] opacity-80"
              />
            </div>
          </div>
          <div className="w-[9.374vh] h-[8.627vh] absolute rounded-[.7vh] top-[29.551vh]  flex text-left p-[.4vh] ">
            <span className="text-[1.4vh] relative -left-[.3vh] -top-[.3vh] kanit-regular font-bold  text-[#A2E6FF]">
              4
            </span>
            <div className="w-[8.4vh] h-[8.627vh]  cursor-pointer hover:scale-105 ease-in-out duration-300 ">
              <img
                src={itemboxleft}
                className="w-[8.4vh] h-[8.627vh] opacity-80"
              />
            </div>
          </div>
          <div className="w-[9.374vh] h-[8.627vh] absolute rounded-[.7vh] top-[38.646vh]  flex text-left p-[.4vh] ">
            <span className="text-[1.4vh] relative -left-[.3vh] -top-[.3vh] kanit-regular font-bold  text-[#A2E6FF]">
              5
            </span>
            <div className="w-[8.4vh] h-[8.627vh]  cursor-pointer hover:scale-105 ease-in-out duration-300 ">
              <img
                src={itemboxleft}
                className="w-[8.4vh] h-[8.627vh] opacity-80"
              />
            </div>
          </div>
          <div className="w-[9.374vh] h-[8.627vh] absolute rounded-[.7vh] top-[47.742vh]  flex text-left p-[.4vh] ">
            <span className="text-[1.4vh] relative -left-[.3vh] -top-[.3vh] kanit-regular font-bold  text-[#A2E6FF]">
              6
            </span>
            <div className="w-[8.4vh] h-[8.627vh]  cursor-pointer hover:scale-105 ease-in-out duration-300 ">
              <img
                src={itemboxleft}
                className="w-[8.4vh] h-[8.627vh] opacity-80"
              />
            </div>
          </div>
          <div className="w-[9.374vh] h-[8.627vh] absolute rounded-[.7vh] top-[56.838vh]  flex text-left p-[.4vh] ">
            <span className="text-[1.4vh] relative -left-[.3vh] -top-[.3vh] kanit-regular font-bold  text-[#A2E6FF]">
              7
            </span>
            <div className="w-[8.4vh] h-[8.627vh]  cursor-pointer hover:scale-105 ease-in-out duration-300 ">
              <img
                src={itemboxleft}
                className="w-[8.4vh] h-[8.627vh] opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
