import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FaPrint, FaRegClock } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { IoIosPrint } from "react-icons/io";
import { MdSensorDoor } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { MdOutlineBed } from "react-icons/md";
import { CgMenuBoxed } from "react-icons/cg";
import { LuParkingCircle } from "react-icons/lu";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineDoorBack } from "react-icons/md";
import Footer from "../components/Footer";

function PropertyDetail() {
  const { id } = useParams();
  const [listing, setListing] = useState();
  console.log(listing);

  useEffect(() => {
    const getListingDetail = async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/listing/property/${id}`
      );
      const data = await res.json();

      if (data.success) {
        setListing(data.listing);
      } else {
        alert(data.message);
      }
    };
    getListingDetail();
  }, []);

  const moveToGmail = async () => {
    const email = listing.agentDetails.email;
    const subject = encodeURIComponent(
      "Inquiry about your listing or property"
    );
    const body = encodeURIComponent("Hello, I would like to inquire about...");
    const mailToLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailToLink;
  };

  return (
    <div>
      {listing && (
        <div className="font-Roboto">
          {/* Upper part */}
          <div className="bg-karanLightGray py-5 ">
            <h1 className="text-3xl font-bold text-center">Property</h1>
            <p className="text-center text-sm pt-1 text-zinc-500 font-semibold">
              Home / Property Details
            </p>
          </div>
          <div className="my-10 md:px-12 px-8">
            {/* property name and address */}
            <div className=" flex justify-between">
              {/* left */}
              <div>
                <div className="flex gap-2 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold">
                    {listing.name}
                  </h1>
                  <button className="px-3 py-1 bg-karanBlue text-white font-semibold rounded-3xl">
                    For {listing.type}
                  </button>
                </div>
                <div className="flex justify-between text-[13px] md:text-[14px] mb-2">
                  <p className="flex items-center gap-1">
                    <IoLocationOutline />
                    {listing.address}
                  </p>
                  <p className="flex items-center gap-1">
                    <FaRegClock /> 11 Days Ago
                  </p>
                </div>
                <p className="text-[13px] md:text-[16px]">
                  <span className="text-karanBlue font-semibold text-[14px] md:text-lg">
                    ${listing.discountPrice}{" "}
                  </span>
                  (344.00$/sqft)
                </p>
              </div>
              {/* right  */}
              <div className="flex gap-3 md:text-xl">
                <FaHeart />
                <LuShare2 />
                <FaPrint />
              </div>
            </div>
            {/* Property Image */}

            {/* Main Part */}
            <div className="md:flex justify-between gap-7">
              {/* left */}
              <div className="">
                <img
                  className="max-h-[550px] object-fit w-full rounded-lg my-5"
                  src={listing.imageUrl}
                  alt=""
                />
                <h1 className="text-xl md:text-2xl font-semibold ">
                  Description
                </h1>
                <p className="text-[14px] text-zinc-700">
                  {listing.description}
                </p>
                <h1 className="text-xl md:text-2xl font-semibold my-3">
                  Property Overview
                </h1>
                <div className="flex gap-8 mb-2 flex-wrap">
                  <div className="flex gap-2">
                    <MdOutlineDoorBack color="#1085FF" size="35" />
                    <p className="text-[13px] font-semibold">
                      Rooms
                      <span className="flex flex-col">{listing.bedRoom}</span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <LuBath color="#1085FF" size="35" />
                    <p className="text-[13px] font-semibold">
                      Baths
                      <span className="flex flex-col">{listing.bathRoom}</span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <MdOutlineBed color="#1085FF" size="35" />
                    <p className="text-[13px] font-semibold">
                      Bed
                      <span className="flex flex-col">{listing.bedRoom}</span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <CgMenuBoxed color="#1085FF" size="35" />
                    <p className="text-[13px] font-semibold">
                      Type
                      <span className="flex flex-col">{listing.type}</span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <LuParkingCircle color="#1085FF" size="35" />
                    <p className="text-[13px] font-semibold">
                      Parking
                      <span className="flex flex-col">{listing.parking}</span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <SiGoogleclassroom color="#1085FF" size="35" />
                    <p className="text-[13px] font-semibold">
                      Furnished
                      <span className="flex flex-col">{listing.furnished}</span>
                    </p>
                  </div>
                </div>
                <h1 className="text-xl md:text-2xl font-semibold my-3">
                  Location
                </h1>
              </div>
              {/* right */}
              <div className=" mt-5">
                <div className="border-2 rounded-xl p-3 min-w-[300px] px-5 py-5">
                  <img
                    className="size-36 rounded-full mx-auto"
                    src="https://www.shutterstock.com/image-photo/african-american-woman-wearing-business-260nw-1846459081.jpg"
                    alt=""
                  />

                  <h1 className="text-center mt-2 font-semibold">
                    {listing.agentDetails
                      ? listing.agentDetails.fullName
                      : "Kristin Watson"}
                  </h1>
                  <p className="text-center text-xs mb-2">Property Agent</p>
                  <div className="border mb-3"></div>
                  <p className="font-semibold">
                    Email:{" "}
                    <span className="font-normal">
                      {listing.agentDetails
                        ? listing.agentDetails.email
                        : "example@gmai.com"}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Phone: <span className="font-normal">+91-123456799</span>
                  </p>
                  <p
                    onClick={moveToGmail}
                    className="text-center cursor-pointer bg-karanBlue rounded-lg py-1 text-white font-semibold mt-3"
                  >
                    Contact Agent
                  </p>
                </div>
                <div className="border-2 rounded-xl p-3 min-w-[300px] px-5 py-5 mt-5">
                  <form>
                    <h1 className="text-xl font-semibold">
                      Find Your Property
                    </h1>
                    <h2 className="mt-3 font-semibold">Your Name *</h2>
                    <input
                      className="bg-karanLightGray w-full p-2 rounded-lg outline-none"
                      type="text"
                      placeholder="Enter Name"
                      id=""
                    />
                    <h2 className="mt-3 font-semibold">Email *</h2>
                    <input
                      className="bg-karanLightGray w-full p-2 rounded-lg outline-none"
                      type="email"
                      placeholder="Enter Email"
                      id=""
                    />
                    <h2 className="mt-3 font-semibold">Phone *</h2>
                    <input
                      className="bg-karanLightGray w-full p-2 rounded-lg outline-none"
                      type="number"
                      placeholder="Enter Phone Number"
                      id=""
                    />
                    <h2 className="mt-3 font-semibold">Message *</h2>
                    <textarea
                      className="bg-karanLightGray w-full p-2 rounded-lg outline-none"
                      type="text"
                      placeholder="Enter Message"
                      id=""
                    />
                    <button className="mx-auto bg-karanBlue text-white font-semibold p-1 rounded-xl w-full">
                      Submit a request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default PropertyDetail;
