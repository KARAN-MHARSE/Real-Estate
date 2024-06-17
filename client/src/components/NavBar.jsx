import { useState } from "react";
import { RiHome3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const user = useSelector((state) => state.user);
  // const navigate = useNavigate();
  // console.log(user);
  const setActive = (e) => {
    setActiveLink(e.target.id);
  };
  return (
    <div className="font-Roboto md:px-12 px-8">
      <nav className="flex justify-between items-center">
        {/* left */}
        <Link to="/">
          <div className="flex items-center gap-1 py-4 xl:3xl md:text-2xl sm:text-xl ">
            <div className="bg-karanBlue p-1 rounded-full">
              <RiHome3Fill />
            </div>
            <h1 className="font-bold ">Real Estate</h1>
          </div>
        </Link>

        {/* middle */}
        <div className=" items-center gap-5 text-[15px] md:text-[16px] sm:flex hidden">
          <Link to="/">
            <p
              id="home"
              onClick={setActive}
              className={`font-medium hover:text-karanBlue hover:underline ${
                activeLink == "home" && "text-karanBlue"
              }`}
            >
              Home
            </p>
          </Link>
          <Link to="/property">
            <p
              id="property"
              onClick={setActive}
              className={`font-medium hover:text-karanBlue hover:underline ${
                activeLink == "property" && "text-karanBlue"
              }`}
            >
              Property
            </p>
          </Link>

          <Link to="/">
            <p
              id="about"
              onClick={setActive}
              className={`font-medium hover:text-karanBlue hover:underline ${
                activeLink == "about" && "text-karanBlue"
              }`}
            >
              About Us
            </p>
          </Link>
          <Link to="/contact-us">
            <p
              id="contact"
              onClick={setActive}
              className={`font-medium hover:text-karanBlue hover:underline ${
                activeLink == "contact" && "text-karanBlue"
              }`}
            >
              Contact Us
            </p>
          </Link>
        </div>
        {/* right */}
        <div>
          {!user ? (
            <Link to="/sign-in">
              <button className="bg-karanBlue px-4 py-1 rounded-3xl text-white font-medium">
                Sign In
              </button>
            </Link>
          ) : (
            <Link to="/profile">
              <div className="size-[35px] bg-karanBlue flex items-center justify-center rounded-full">
                <h1 className="text-white font-bold">
                  {user.fullName.charAt(0).toUpperCase()}
                </h1>
              </div>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
