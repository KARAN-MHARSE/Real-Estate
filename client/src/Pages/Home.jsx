import React, { useEffect, useState } from "react";
import HomeHeader from "../components/HomeHeader";
import Card from "../components/Card";
import ListingCard from "../components/ListingCard";
import { GrFormNextLink } from "react-icons/gr";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { propertyTypesData } from "../data/index";

function Home() {
  const [listings, setListings] = useState();

  useEffect(() => {
    const getListings = async () => {
      const res = await fetch("http://localhost:5000/api/v1/listing/all");
      const data = await res.json();
      setListings(data);
    };
    getListings();
  }, []);
  return (
    <div>
      <HomeHeader />
      {/* Explore types */}
      <div className="flex flex-col items-center justify-center py-7 w-full">
        <h2 className="font-semibold">Property Types</h2>
        <h1 className="text-3xl font-semibold">
          Explore Property <span className="font-normal italic">Types</span>
        </h1>
        {/* card div */}
        <div className="flex flex-wrap gap-3 my-6 md:px-12 px-8">
          {propertyTypesData &&
            propertyTypesData.map((data, index) => (
              <Card type="types" data={data} />
            ))}
        </div>
      </div>
      {/* Popular properties */}
      <div className="md:px-12 px-8 py-6 bg-karanLightGray">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">Property Types</h2>
            <h1 className="text-3xl font-semibold">
              Explore Property <span className="font-normal italic">Types</span>
            </h1>
          </div>
          <Link to="/property">
            <div className="flex gap-2">
              <button className="bg-karanBlue px-4 py-1 rounded-2xl text-white font-semibold">
                Visit all properties
              </button>
              <button className="p-2 bg-black  rounded-full text-white">
                <GrFormNextLink size="30" />
              </button>
            </div>
          </Link>
        </div>
        {/* property card */}
        <div
          className="grid sm:grid-cols-3 
        md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-3 py-7"
        >
          {listings &&
            listings.listing.map((l, index) => (
              <ListingCard listing={l} key={index} />
            ))}
          {/* <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
