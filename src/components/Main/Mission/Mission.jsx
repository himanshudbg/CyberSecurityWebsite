import React from "react";
import data from "../../../Data/Mission.json";

const Mission = () => {
  return (
    <div className="max-w-[1330px] mx-auto text-center py-[4rem]">
        <div className="mb-12">
            <h4 className="text-[2rem] font-semibold uppercase mb-2">{data.header.heading}</h4>
            <h1 className="text-[5rem] leading-snug">
              {data.header.title.split(data.header.highlight)[0]}
              <span className="text-main">{data.header.highlight}</span>
              {data.header.title.split(data.header.highlight)[1]}
            </h1>
        </div>

        <div className="flex items-center gap-10 text-left"> 
          {data.services.map((service, index) => (
            <div key={index} className="p-10 border-l-2 border-main">
              <i className={`${service.iconClass} text-[2rem] text-main border-2 border-main p-5 rounded-full mb-5`}></i>
              <h4 className="text-[2rem] font-bold mb-3">{service.title}</h4>
              <p className="text-gray">{service.description}</p>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Mission;
