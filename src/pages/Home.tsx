import React from "react";
import Link from "../components/Link/Link";

const Home = () => {
  return (
    <>
      <section className="flex flex-col-reverse items-center justify-center h-[calc(100vh-50px)] gap-8 px-4 py-10 mx-auto text-gray-200 md:flex-row xl:px-0 max-w-7xl">
        <div className="flex flex-col items-center justify-center text-left md:text-left md:items-start md:justify-start">
          <h1 className="mt-0 mb-2 text-5xl font-medium leading-tight text-gray-200">
            Video calling and meetings for anyone, anywhere.
          </h1>
          <p className="mt-0 mb-2 text-base font-medium leading-tight text-gray-300">
            Push makes it easy to host or join virtual meetings and
            it's 100% free. Try it yourself!
          </p>
          <div className="flex gap-2 mt-8">
            <button className="btn btn-secondary">Get Started</button>
            <div className="inline-flex">
              <input type="text" placeholder="Enter Meeting Code" />
              <button className="btn btn-primary">Join</button>
            </div>
          </div>
          <p className="self-start mt-8 text-gray-300">
            Don't have an account?
            <Link href="/" className="ml-2 underline">
              Sign Up
            </Link>
          </p>
        </div>
        <div className="min-h-[300px] max-h-[40vh]">
          <img
            className="object-cover w-full h-full rounded-md shadow-lg shadow-blue-500/2"
            src="https://images.unsplash.com/photo-1586543354240-2187898bb2e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
