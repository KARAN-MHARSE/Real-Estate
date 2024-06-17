import React, { useEffect, useState } from "react";
import ListingCard from "../components/ListingCard";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Property() {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState("500000");
  const [listings, setListings] = useState();
  const [sorting, setSorting] = useState("");
  console.log(sorting);
  const [filter, setFilter] = useState({
    city: "",
    type: "rent",
    propertType: "",
    price: priceRange,
  });

  //get listings
  useEffect(() => {
    // let sortedListings = [...listings];
    if (sorting == "asc") {
      const data = listings.listing.sort(
        (a, b) => a.discountPrice - b.discountPrice
      );
    }
    if (sorting == "desc") {
      const data = listings.listing.sort(
        (a, b) => b.discountPrice - a.discountPrice
      );
    }
  }, [sorting]);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const query = urlParams.toString();

    // getAllListings
    const getAllListings = async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/listing/all?${query}`
      );
      const data = await res.json();

      setListings(data);
    };
    getAllListings();
  }, [window.location.search]);

  const handleChange = async (e) => {
    e.preventDefault();

    setFilter({ ...filter, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("type", filter.type);
    urlParams.set("price", filter.price);
    urlParams.set("city", filter.city);
    urlParams.set("propertType", filter.propertType);
    const searchQuery = urlParams.toString();
    navigate(`/property?${searchQuery}`);
  };

  return (
    <div>
      {listings && (
        <div className="font-Roboto">
          {/* Upper prt */}
          <div className="bg-karanLightGray py-10 ">
            <h1 className="text-3xl font-bold text-center">Property</h1>
            <p className="text-center text-sm pt-1 text-zinc-500 font-semibold">
              Home / Property
            </p>
          </div>
          <div className="flex gap-5  my-10 md:px-12 px-8">
            {/* left */}
            <div className="md:basis-[30%] lg:basis-[20%] hidden md:inline-block">
              <div className="border border-zinc-500 px-4 rounded-lg">
                <h1 className="font-bold my-3">Find Your Property</h1>
                <div className="h-[1px] w-full bg-zinc-500 my-2"></div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <p className="text-sm font-semibold">Location</p>
                    <select
                      className=" my-2 w-full bg-karanLightGray px-2  py-1 rounded-lg outline-none text-zinc-500 text-sm"
                      name="city"
                      id="city"
                      onChange={handleChange}
                    >
                      <option value="">Select Location</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="thane">Thane</option>
                      <option value="banglore">Banglore</option>
                    </select>
                  </div>
                  <div className="h-[1px] w-full bg-zinc-500 mb-2"></div>
                  {/* Property status */}
                  <div>
                    <p className="text-sm font-semibold">Propert Status</p>
                    <div>
                      <p className="text-sm flex gap-2 text-zinc-800">
                        <input
                          type="radio"
                          value="rent"
                          onChange={handleChange}
                          checked={filter.type === "rent"}
                          id="type"
                        />{" "}
                        Rent
                      </p>
                      <p className="text-sm flex gap-2 text-zinc-800">
                        <input
                          type="radio"
                          value="sell"
                          onChange={handleChange}
                          checked={filter.type === "sell"}
                          id="type"
                        />{" "}
                        Sell
                      </p>
                    </div>
                    <div className="h-[1px] w-full bg-zinc-500 my-2"></div>
                  </div>
                  {/* Property Price */}
                  <div>
                    <p className="text-sm font-semibold">Property Type</p>
                    <div>
                      <p className="text-sm flex gap-2 text-zinc-800">
                        <input type="checkbox" name="" id="furnished" />{" "}
                        Furnished
                      </p>
                      <p className="text-sm flex gap-2 text-zinc-800">
                        <input type="checkbox" name="" id="parking" /> Parking
                      </p>
                      <p className="text-sm flex gap-2 text-zinc-800">
                        <input type="checkbox" name="" id="offer" /> Offer
                      </p>
                      <p className="text-sm flex gap-2 text-zinc-800">
                        <input type="checkbox" name="" id="" /> Villas
                      </p>
                      <p className="text-sm flex gap-2 text-zinc-800">
                        <input type="checkbox" name="" id="" /> Medical
                      </p>
                      <p className="text-sm flex gap-2 text-zinc-800">
                        <input type="checkbox" name="" id="" /> Bunglows
                      </p>
                    </div>
                    <div className="h-[1px] w-full bg-zinc-500 my-2"></div>
                  </div>
                  {/* price */}
                  <div className="mb-2">
                    <p className="text-sm font-semibold">Price</p>
                    <div className="">
                      <p className="text-sm flex gap-2 text-zinc-800">
                        ₹0 - ₹{priceRange}
                      </p>
                      <input
                        className="w-full bg-karanLightGray"
                        type="range"
                        defaultValue={priceRange}
                        onChange={handleChange}
                        min="0"
                        max="500000"
                        name=""
                        id="price"
                      />
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-zinc-500 my-2"></div>

                  <button className="w-full mb-5 mt-3 bg-karanBlue py-1 rounded-lg">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* right */}
            <div className="md:basis-[70%] lg:basis-[80%] ">
              <div className="flex justify-between">
                <p className="text-sm text-zinc-500">
                  showing 1-12 of 240 results
                </p>
                <div className="flex gap-2">
                  <p className="text-sm text-zinc-500">sort by:</p>
                  <select
                    className="text-sm text-zinc-500 border  border-zinc-500 rounded-md"
                    name=""
                    id=""
                    onChange={(e) => setSorting(e.target.value)}
                  >
                    <option value="">Default sorting</option>
                    <option value="asc">Low-High Price</option>
                    <option value="desc">High-Low Price</option>
                  </select>
                </div>
              </div>
              {/* Listing cards */}
              <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-5">
                {listings.listing.map((l, index) => (
                  <ListingCard listing={l} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Property;
