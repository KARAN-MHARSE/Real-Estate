import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { signInStart, signInFailure, signInSuccess } from "../redux/user/user";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});

  const loading = useSelector((state) => state.loading);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());

    const res = await fetch("http://localhost:5000/api/v1/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    // console.log(data?.user.fullName.charAt(0));
    if (data.success) {
      dispatch(signInSuccess(data.user));
      navigate("/");
    } else {
      dispatch(signInFailure(data.message));
      alert(data.message);
    }
  };

  return (
    <div className="flex h-[84vh] justify-center">
      {/* left */}
      <div className="md:basis-[50%]  md:px-12 px-auto flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Sign in to your Account</h1>
        <p className="text-[13px] text-zinc-600 font-medium">
          Welcome back! Select method to Sign In
        </p>

        {/* Google or facebook */}
        <div className="mt-5 flex  gap-5">
          <Link>
            <div className="flex items-center justify-center gap-2 border-2 w-[120px] p-1 rounded-lg">
              <img
                className="size-[16px]"
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                alt=""
              />
              <p className="font-semibold">Google</p>
            </div>
          </Link>
          <Link>
            <div className="flex items-center justify-center gap-2 border-2 w-[120px] p-1 rounded-lg">
              <img
                className="size-[16px]"
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
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
            {!loading ? "Sign In" : "Loading..."}
          </button>
        </form>
        <p className="text-[13px] text-zinc-600 font-medium">
          Don't have an Account?
          <Link to="/sign-up">
            <span className="text-karanBlue"> Create an account</span>
          </Link>
        </p>
      </div>

      {/* right */}
      <div className="basis-[50%] hidden md:inline-block">
        <img
          className="h-full object-fill hidden md:inline-block"
          loading="lazy"
          src="https://cdn.vectorstock.com/i/1000v/53/15/isometric-3d-computers-with-statistics-graphs-vector-23555315.jpg"
        />
      </div>
    </div>
  );
}

export default SignIn;
