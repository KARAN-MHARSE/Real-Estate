import { RiHome3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-karanBlack text-white md:px-12 px-8 py-6">
      <div className="flex justify-between gap-4 md:gap-7">
        {/* Left */}
        <div className="max-w-[500px]">
          <Link to="/">
            <div className="flex items-center gap-1 py-4 xl:3xl md:text-xl text-lg ">
              <div className="bg-karanBlue p-1 rounded-full">
                <RiHome3Fill />
              </div>
              <h1 className="font-bold ">Real Estate</h1>
            </div>
          </Link>
          <p className="text-xs text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            explicabo corrupti aliquam, fuga facilis modi voluptatum inventore
            facere at dolore!
          </p>
        </div>
        {/* middle */}
        <div>
          <h1 className="text-xl font-semibold">Company</h1>
          <ul className="md:text-sm text-xs text-zinc-500 hover:text-white mt-3">
            <li>
              <a href="#">Our agents</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Property</a>
            </li>
            <li>
              <a href="#">Blog </a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        {/* right */}
        <div>
          <h1 className="text-xl font-semibold mb-3">Contact</h1>
          <p className="md:text-sm text-xs text-zinc-500">+91-1234567890</p>
          <p className="md:text-sm text-xs text-zinc-500">example@gmail.com</p>
          <p className="md:text-sm text-xs text-zinc-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        {/* Above medium screen form */}
        <div className="md:flex flex-col hidden">
          <form>
            <h1 className="text-xl mb-3">Get the latest imformation</h1>
            <input
              className="p-2 rounded-lg bg-zinc-600"
              type="email"
              name=""
              id=""
              placeholder="Enter address"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
