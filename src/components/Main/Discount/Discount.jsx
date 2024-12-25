import React from "react";
import data from "../../../Data/Discount.json";

const Discount = () => {
  return (
    <div className="max-w-[1330px] mx-auto py-[4rem]">
        <div className="flex items-center gap-10">
            <div className="w-3/5 h-[500px]">
                <img src={require(`../../../assets/${data.image}`)} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="w-2/5 h-[500px] p-[4rem] bg-carbon">
                <h3 className="text-[4rem] font-bold leading-snug mb-4">{data.title}</h3>
                <p className="text-gray mb-8">{data.description}</p>
                <a className="text-[1.2rem] border border-main px-7 py-3 rounded-sm hover:bg-main transition-all duration-200 ease-linear" href={data.buttonLink}>{data.buttonText}</a>
            </div>
        </div>
    </div>
  );
};

export default Discount;
