import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex  justify-center mt-16">
      <div className="flex flex-col items-center">
        <h1 className="text-9xl font-bold">
          4<span className="text-karanBlue">0</span>4
        </h1>
        <h2 className="text-2xl font-bold font-Roboto mt-3">
          Oops! <span className="italic font-normal">Page Not Found</span>
        </h2>
        <p className="text-sm text-zinc-700">
          The page you are looking for cannot be
        </p>
        <p className="text-sm text-zinc-700">
          found, take a break before trying again
        </p>
        <Link to="/">
          <button className="mt-7 bg-karanBlue px-3 py-1 rounded-3xl text-white font-semibold">
            Go to Home page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
