import React from "react";
import { RiHome3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { contactData } from "../data/index";

function ContactUs() {
  return (
    <div className="my-6 md:px-12 px-8 font-Roboto">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1 py-4 xl:3xl md:text-2xl sm:text-xl ">
          <div className="bg-karanBlue p-1 rounded-full">
            <RiHome3Fill />
          </div>
        </div>
        <h1 className="md:text-3xl sm:text-2xl text-xl font-bold">
          Contact our friendly team
        </h1>
        <p className="text-[]">Lets us know how we can help you</p>
        {/* cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-9">
          {contactData.map((data, index) => (
            <Card type="contact" data={data} />
          ))}
          <Card type="card" />
        </div>
        <h2 className="md:text-2xl text-xl font-bold">
          {" "}
          Frequently asked questions
        </h2>
      </div>
    </div>
  );
}

export default ContactUs;
