import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { signInStart, signInEnd, signInSuccess } from "../redux/user/user";

function SignUp() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  // console.log(loading);

  const handleChange = (e) => {
    e.preventDefault();

    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(signInStart());

    const res = await fetch("http://localhost:5000/api/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    dispatch(signInEnd());
    if (data.success) {
      navigate("/sign-in");
    } else {
      alert(data.message);
    }
    // console.log(data);
  };

  return (
    <div className="flex h-[84vh] justify-center">
      {/* left */}
      <div className="md:basis-[50%] md:px-12 px-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Sign Up to your Account</h1>
        <p className="text-[13px] text-zinc-600 font-medium">
          Welcome back! Select method to Sign Up
        </p>

        {/* Google or facebook */}
        <div className="mt-5 flex  gap-5">
          <Link>
            <div className="flex items-center justify-center gap-2 border-2 w-[120px] p-1 rounded-lg">
              <img
                className="size-[16px]"
                src="  https://cdn-icons-png.flaticon.com/512/300/300221.png "
                alt=""
              />
              <p className="font-semibold">Google</p>
            </div>
          </Link>
          <Link>
            <div className="flex items-center justify-center gap-2 border-2 w-[120px] p-1 rounded-lg">
              <img
                className="size-[16px]"
                src="  https://cdn-icons-png.flaticon.com/512/300/300221.png "
                alt=""
              />
              <p className="font-semibold">FaceBook</p>
            </div>
          </Link>
        </div>
        {/* Manually login */}
        <p className=" text-center text-[13px] text-zinc-600 mt-5 underline">
          or Continue with
        </p>
        <form onSubmit={handleSubmit} className="my-5 flex flex-col gap-3">
          <div className="flex items-center gap-4 px-3 bg-zinc-200 p-1 rounded-lg border-2 border-zinc-300">
            <FaRegUser color="#808080" size={18} />
            <input
              className="bg-transparent outline-none font-medium text-[#808080]"
              type="text"
              placeholder="Full name"
              id="fullName"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-4 px-3 bg-zinc-200 p-1 rounded-lg border-2 border-zinc-300">
            <MdOutlineMail color="#808080" size={18} />
            <input
              className="bg-transparent outline-none font-medium text-[#808080]"
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-4 px-3 bg-zinc-200 p-1 rounded-lg border-2 border-zinc-300">
            <RiLockPasswordLine color="#808080" size={18} />
            <input
              className="bg-transparent outline-none font-medium text-[#808080]"
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <button className="bg-karanBlue p-1 text-white font-medium rounded-lg">
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
        <p className="text-[13px] text-zinc-600 font-medium">
          Already have an Account?
          <Link to="/sign-in">
            <span className="text-karanBlue"> Click here to sign in</span>
          </Link>
        </p>
      </div>

      {/* right */}
      <div className="md:basis-[50%] hidden md:inline-block">
        <img
          className="h-full object-fill "
          loading="lazy"
          src="https://cdn.vectorstock.com/i/1000v/53/15/isometric-3d-computers-with-statistics-graphs-vector-23555315.jpg"
        />
      </div>
    </div>
  );
}

export default SignUp;
