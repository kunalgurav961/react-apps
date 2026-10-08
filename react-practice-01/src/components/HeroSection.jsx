import React from "react";

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center relative">
      <div className="  w-[70%] absolute top-1/4 left-1/2 -translate-[50%] flex justify-center items-center flex-col gap-4">
        <h1 className="text-9xl text-center">
          Hello, Welcome to <br />
          <span className="text-cyan-600">React</span>{" "}
          <span className="text-amber-300">Practice</span>
        </h1>
        <p className="w-150 text-center mt-5 text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
          repellendus sunt at velit officia provident quae, reiciendis voluptas
          dignissimos explicabo?
              </p>
              <button className="
              border
              px-7 py-4 text-5xl rounded-4xl
              hover:bg-white hover:text-black ease-in-out">Call To Action</button>
      </div>
    </div>
  );
};

export default HeroSection;
