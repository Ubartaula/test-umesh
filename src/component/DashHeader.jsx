import React from "react";

import { Link } from "react-router-dom";

const DashHeader = () => {
  return (
    <main className="bg-blue-400 min-h-[4rem]">
      <nav className=" ml-12 text-left p-2 hidden sm:block">
        <Link to="" className="p-1">
          About-Us
        </Link>
        <Link to="" className="p-1">
          Our-Team
        </Link>
        <Link to="" className="p-1">
          Products
        </Link>
        <Link to="" className="p-1">
          Contact-Us
        </Link>
      </nav>

      <div className="group absolute left-3 top-3 sm:hidden">
        <p className="group">Home</p>
        <nav className="hidden group-hover:flex group-hover:flex-col">
          <Link to="" className="p-1">
            About-Us
          </Link>
          <Link to="" className="p-1">
            Our-Team
          </Link>
          <Link to="" className="p-1">
            Products
          </Link>
          <Link to="" className="p-1">
            Contact-Us
          </Link>
        </nav>
      </div>

      {/* <div className="absolute top-2 right-2">

      </div> */}
    </main>
  );
};

export default DashHeader;
