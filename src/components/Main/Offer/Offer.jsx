import React from "react";
import data from "../../../Data/Offer.json";

const Offer = () => {
  return (
    <div className="max-w-[1330px] mx-auto py-[4rem] text-center">
        <div className="mb-8">
            <h2 className="text-[2.5rem] font-semibold uppercase">{data.header}</h2>
        </div>

        <div className="grid grid-cols-auto-fit-18rem gap-20 mb-20">
            {data.services.map((services, index) => (
            <div key={index} className="flex items-center gap-5 border-b py-4 border-x-stone-800">
                <span className="text-[2rem] text-main font-bold">{services.number}</span>
                <h4 className="text-[1.5rem] font-bold">{services.title}</h4>
            </div>
            ))}
        </div>

        <div>
            <a className="text-[1.2rem] border border-main px-7 py-3 rounded-sm hover:bg-main transition-all duration-200 ease-linear" href={data.buttonLink}>{data.buttonText}</a>
        </div>
    </div>
  );
};

export default Offer;
