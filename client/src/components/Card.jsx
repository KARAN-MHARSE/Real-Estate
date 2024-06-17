import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Card({ type, data }) {
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    city: "",
    type: "",
    propertType: data?.type ? data.type.toLowerCase() : "",
    price: 5000000000,
  });

  const handleClick = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("type", filter.type);
    urlParams.set("price", filter.price);
    urlParams.set("city", filter.city);
    urlParams.set("propertType", filter.propertType);
    const searchQuery = urlParams.toString();
    navigate(`/property?${searchQuery}`);
  };

  // Rendering cards------------------------------------------------------------------------------------------
  const propertyTypes = () => (
    <div
      onClick={handleClick}
      className="bg-karanLightGray hover:bg-karanBlue hover:text-white p-5 rounded-lg flex flex-col items-center"
    >
      <div className="size-[70px] p-2 flex items-center  justify-center bg-zinc-300 rounded-full mb-3">
        <img className="size-[50px]" src={data.icons} alt="" />
      </div>
      <p className="text-md font-semibold">{data.type}</p>
      <p className="text-xs">{data.desc}</p>
    </div>
  );
  const contactCard = () => (
    <div>
      {data && (
        <div className="border-2  p-3 rounded-xl">
          <div className="border-2 p-2 rounded-lg w-8">
            <img className="w-6" src={data.icon} alt="" />
          </div>
          <h2 className="mt-10 font-semibold">{data.heading}</h2>
          <p className="text-[13px] my-1">{data.desc}</p>
          <Link>
            <p className="text-[13px] underline font-semibold">{data.link}</p>
          </Link>
        </div>
      )}
    </div>
  );
  return type == "types" ? propertyTypes() : contactCard();
}

export default Card;
