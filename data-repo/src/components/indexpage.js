 
// get our fontawesome imports
import {
  faFileImport,
  faVault,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className=" flex items-center flex-wrap h-full pb-10 bg-blue-100 ">
      <section className="container mx-auto px-6 p-8">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">
            Dataset Database
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {" "}
            Collecting data is important, but finding datasets can be time
            consuming.
          </p>
        </div>

        <div className=" flex-wrap mb-20  ">
          <div className=" items-center mt-auto text-white hover:bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none bg-green-400 rounded items-lefth-52 sm:h-full sm:w-72 rounded-xl  text-8xl  text-center  w-full md:w-1/2 mx-auto p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg px-20 ">
            <Link to="/search">
              {" "}
              <FontAwesomeIcon icon={faVault} size="lg" /> 
              <div className="w-full pl-5 pb-10 ">
                <h1 className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none postion-absolute  pt-2 ml-auto">
                  
                  Search the database
                </h1>
                <p className="text-xl   h-3 rounded-2x2">
                  Search the database of links to datasets by category, type,
                  country etc.
                </p>
              </div>
            </Link>
          </div>
        </div>
      
        <div className=" items-center mt-auto text-white hover:bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none bg-green-400 rounded items-lefth-52 sm:h-full sm:w-72 rounded-xl  text-8xl text-center  w-full md:w-1/2 mx-auto p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg px-20 ">
          <Link to="/add">
            <FontAwesomeIcon icon={faFileImport} size="lg" />
            <div className="w-full pl-5 pb-10 ">
              <h1 className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none postion-absolute pt-2 ml-auto">
                Add to the database
              </h1>
              <p className="text-xl  h-3 rounded-2x2">
                Something missing? Add a new record.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
