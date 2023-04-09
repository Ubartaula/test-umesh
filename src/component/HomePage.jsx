import React from "react";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";

const HomePage = () => {
  useTitle("Laxman-Kandel & Sons WorkShop");

  return (
    <main className="min-h-[100vh] bg-slate-300 mx-auto">
      <nav className="bg-black text-white p-3 font-bold">
        <h1 className="text-center">Welcome to Kandel & Sons WorkShop</h1>
        <address className="text-center">
          <p>8609 Broadway St</p>
          <p>Houston, Texas 77081</p>
        </address>

        <section className="absolute right-2 top-12">
          <Link
            className=" text-yellow-400 font-normal hover:text-blue-600"
            to="/dash"
          >
            Login
          </Link>
        </section>
        <section className="absolute left-2 top-12">
          <div className="group">
            <p className="text-yellow-400 font-normal hover:text-blue-600">
              Home
            </p>
            <div className="group hidden group-hover:block p-2 bg-slate-500 rounded-sm font-normal">
              <p className="hover:text-black">Who Are We</p>
              <p className="hover:text-black">Our Team</p>
              <p className="hover:text-black">Products</p>
              <p className="hover:text-black">Locations</p>
            </div>
          </div>
        </section>
      </nav>
      <div className="bg-hero-pattern min-h-[80vh]">
        Welcome to Laxman Kandel's WorkShop{" "}
      </div>
      <footer className="bg-black text-white absolute bottom-0 right-0 left-0 p-2 mx-auto text-center">
        <p>{"Employee : "}logged in </p>
        <div className="text-center">
          contact number : 001-897-4567-2000 email : laxmankandel@email.com 8609
          Pleasant view Dr, Houston, Texas
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
