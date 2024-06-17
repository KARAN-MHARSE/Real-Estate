import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { FaVectorSquare } from "react-icons/fa";

function ListingCard({ listing }) {
  // lg:w-[300px] md:w-[250px] w-[200px]
  return (
    <div className=" rounded-lg overflow-hidden shadow-xl">
      <Link to={`/property/${listing._id}`}>
        <img className="w-full" src={listing.imageUrl} alt="" />
        <div className="flex flex-col  px-2 mt-3">
          <p className="font-semibold text-karanBlue">
            ₹{listing.discountPrice}
          </p>
          <p className="text-black font-semibold">{listing.name}</p>
          <p className="flex items-center text-[13px] font-medium">
            <IoLocationOutline />
            {listing.address}
          </p>
          <div className="h-[1px] w-full bg-zinc-500 my-2"></div>
        </div>
        <div className="flex justify-between px-3 mb-2">
          <p className="flex text-[13px] items-center gap-1 font-semibold">
            <FaBed color="#1085FF" />
            {listing.bedRoom} Beds
          </p>
          <p className="flex text-[13px] items-center gap-1 font-semibold">
            <FaBath color="#1085FF" />
            {listing.bathRoom} Bath
          </p>
          <p className="flex text-[13px] items-center gap-1 font-semibold">
            <FaVectorSquare color="#1085FF" />
            {listing.parking ? "Parking" : "No parking"}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ListingCard;
