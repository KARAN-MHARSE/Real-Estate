import { current } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";
// import SelfListing from '../components/SelfListing'
function Profile() {
  const { user } = useSelector((state) => state);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `http://localhost:5000/api/v1/auth/updateuser/${user._id}`,
      {
        method: "POST",
      }
    );
    const data = await res.json();
  };

  return (
    <div>
      {user ? (
        <div className="max-w-lg mx-auto flex flex-col gap-3">
          <h1 className="text-3xl my-8 font-semibold mx-auto">Profile</h1>
          <img
            src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
            className="h-24 w-24 text-center rounded-full object-cover self-center"
          />
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-3  mx-auto w-3/4"
          >
            <input
              type="text"
              placeholder="Fullname"
              defaultValue={user.fullName}
              id=""
              className="p-2 rounded-lg "
            />
            <p className="p-2 rounded-lg ">{user.email}</p>

            <input
              type="text"
              placeholder="Password"
              id=""
              className="p-2 rounded-lg "
            />
            <button
              type="submit"
              className="p-2 bg-slate-700 rounded-lg  text-white font-semibold"
            >
              UPDATE
            </button>
          </form>
          <Link to="/create-listing">
            <p className="bg-green-700 w-3/4 p-2 text-center text-white font-semibold rounded-lg mt-3 mx-auto">
              CREATE LISTING
            </p>
          </Link>
          <div className="flex mt-3  text-red-700 text-sm mx-auto gap-5">
            <p>Delete Account</p>
            <p>||</p>
            <span className="cursor-pointer">Sign out</span>
          </div>
          {/* {
                  list.map((listing)=>(
                      <SelfListing key={listing._id} listing={listing}/>
                  ))
              } */}

          {/* <SelfListing/> */}
        </div>
      ) : (
        <div>
          <ErrorPage />
        </div>
      )}
    </div>
  );
}

export default Profile;
