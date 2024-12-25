import React from "react";
import data from "../../../Data/Platforms.json";

const Platforms = () => {
  return (
    <div className="max-w-[1330px] mx-auto py-[4rem]">
        <div className="flex gap-10 flex-wrap">
          {data.boxs.map((box, index) =>(
          <div 
            key={index}
            className={`flex ${index % 2 === 1 ? "flex-row-reverse" : "flex-row"} items-center gap-10`}
          >
            <img className="w-1/2 rounded-lg" src={require(`../../../assets/${box.image}`)} alt="" />
            <div className="w-1/2 text-left">
              <h4 className="text-[3.5rem] font-bold mb-4">{box.title}</h4>
              <p className="text-[1.1rem] text-gray">{box.description}</p>
            </div>
          </div>
          ))}
        </div>
    </div>
  );
};

export default Platforms;
