import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { CiYoutube } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { useState } from "react";

function Header() {
  return (
    <div className="flex items-center justify-between bg-karanBlack text-[#ffffff] font-semibold md:px-12 px-8 py-2">
      {/* left */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <IoCall color="#1085FF" />
          <p>(+91)-9702524890</p>
        </div>
        <div className="flex items-center gap-2">
          <MdEmail color="#1085FF" />
          <p>example@gmai.com</p>
        </div>
      </div>
      {/* right */}
      <div className=" gap-2 hidden sm:flex">
        <div className="flex items-center justify-center p-1 text-karanBlack bg-white rounded-full ">
          <FaFacebookF />
        </div>
        <div className="flex items-center justify-center p-1 text-karanBlack bg-white rounded-full ">
          <IoLogoInstagram />
        </div>
        <div className="flex items-center justify-center p-1 text-karanBlack bg-white rounded-full ">
          <CiYoutube />
        </div>
        <div className="flex items-center justify-center p-1 text-karanBlack bg-white rounded-full ">
          <FaTwitter />
        </div>
      </div>
    </div>
  );
}

export default Header;
