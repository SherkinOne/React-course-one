import { Link } from "react-router-dom";
import {
  faBolt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <nav className="bg-green-400 pb-2 pt-2">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center ">
        <a className="font-bold text-2xl lg:text-4xl text-gray-200" href="\">
          <span className="pr-5">
        <FontAwesomeIcon icon={faBolt} size="lg" /> 
        </span>
          {/* //https://blog.saeloun.com/2021/12/23/navigation-in-react-router-6.html */}
          Energy Data Set Collection
        </a>
        <div className="block lg:hidden ">
          <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:block ">
          <ul className="flex justify-evenly ">
            <Link
              className="mr-8 hover:text-1xl hover:text-gray-200   "
              to="search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7  "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Search
            </Link>
            <Link
              className="mr-8 hover:text-1xl hover:text-gray-200  inset-x-0 top-0"
              to="add"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Add
            </Link>
            <div className=" hover:text-gray-200 inset-x-0 top-0   ">
              <Link to="about">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                About
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
