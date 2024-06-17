import React from "react";

function HomeHeader() {
  return (
    <div className="font-Roboto md:pl-12  bg-karanLightGray flex  gap-2">
      {/* left div */}
      <div className="z-10 sm:basis-[60%]  py-7 pl-8 flex flex-col justify-center">
        <p>Find Your Dream Property Easily</p>
        <h1 className="text-3xl italic pt-3">Instant Property Deals:</h1>
        <h1 className="text-3xl font-bold">Buy, Sell, and Rent</h1>
        <p className="text-zinc-500 text-xs pt-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim tenetur
          fugit obcaecati ipsa recusandae ullam consequatur, quos harum corrupti
          doloribus!
        </p>
        <h2 className="text-2xl font-semibold pt-4">
          Let's Find Your <span className="text-karanBlue">Dream Property</span>
        </h2>
      </div>
      {/* right div */}
      <div className="sm:basis-[40%] hidden sm:flex ">
        <img
          className="h-full w-full grayscale"
          src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default HomeHeader;
