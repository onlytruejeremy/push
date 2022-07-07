import React from "react";
import { FiKey } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <section className="gap-8 min-h-[calc(100vh-48px)] grid grid-cols-1 p-6 mx-auto text-gray-200 max-w-7xl  items-center content-center md:grid-cols-2">
      <div className="order-2 md:order-1">
        <h1 className="mt-0 mb-2 text-5xl font-medium leading-tight text-gray-200">
          Video calling for everyone
        </h1>
        <p className="mt-4">
          Push gives you the tools you need to connect with friends,
          family, and co-workers no matter where you are in the world.
        </p>
        <div className="flex flex-row gap-2 py-8 hero-actions">
          <button className="btn btn--primary">Get Started</button>
          <label className="label">
            <span className="inline-block px-2 my-auto text-xl text-gray-600 bg-transparent">
              <FiKey className="my-auto" />
            </span>
            <input type="text" placeholder="Enter Meeting Code" />
          </label>
        </div>
        <p className="text-gray-400">
          Need an account?{" "}
          <NavLink to="/register" className="hover:text-gray-200">
            Sign Up
          </NavLink>
        </p>
      </div>
      <div className="order-1 md:order-2">
        <img
          className="object-cover max-h-[500px] w-full shadow-blue-900/50 shadow-xl rounded-md"
          src="https://images.unsplash.com/photo-1612831817984-97e394106fff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
        />
      </div>
    </section>
  );
};

export default Home;
