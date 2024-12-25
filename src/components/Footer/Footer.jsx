import React from "react";
import data from "../../Data/Footer.json";

const Footer = () => {
  return (
    <div className="max-w-[1330px] mx-auto flex justify-between items-start gap-10 py-[4rem]">
      <div>
        <img className="mb-4 w-[250px]" src={require(`../../assets/${data.logo}`)} alt="" />
        <h4 className="text-[3rem] font-bold">{data.title}</h4>
      </div>

      <div>
        {data.contactInfo.map((info, index) => (
        <ul key={index} className="mb-6">
          <li className="mb-3">{info.address}</li>
          <li className="mb-3">{info.hours}</li>
          <li className="mb-3">{info.phone}</li>
          <li>{info.email}</li>
        </ul>
        ))}
      </div>

      <div>
        <ul className="flex flex-col gap-10">
          {data.socialMedia.map((social, index) => (
            <li key={index} className="hover:text-main transition-all duration-200 ease-linear">
              <a className="text-[1.5rem] uppercase" href={social.socialLink}>{social.socialText}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
