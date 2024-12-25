import React from "react";
import backgroundVideo from "../../assets/background.mp4";
import logo from "../../assets/logo.png";
import data from "../../Data/Header.json";

const Header = () => {
  return (
    <div className="relative w-full h-screen">

      <video
      className="absolute top-0 left-0 w-full h-full object-cover bg-black/60"
      src={backgroundVideo}
      autoPlay
      loop
      muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      <div className="relative max-w-[1330px] mx-auto px-4 py-8 flex items-center justify-between mb-8">
        <div>
          <img src={logo} alt="" className="w-[200px]"/>
        </div>

        <div>
          <ul className="flex space-x-6">
            {data.menus.map((item, index) => (
              <li key={index} className="text-white text-lg p-4 cursor-pointer hover:text-main transition-all duration-200 ease-linear">
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-white text-[6.5rem] font-bold leading-snug mb-3">{data.content.headline}  <span className="text-main">{data.content.highlight}</span></h1>
          <p dangerouslySetInnerHTML={{__html: data.content.description}} className="text-gray text-[1.3rem] mb-8"/>
          <a href={data.content.buttonLink} className="text-white bg-main px-6 py-3 rounded-full uppercase font-medium w-fit hover:bg-gray transition-all duration-200 ease-linear">{data.content.buttonText}</a>
      </div>

    </div>
  );
};

export default Header;
