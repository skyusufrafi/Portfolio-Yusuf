import React from "react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">

      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        Shaikh Mohammed Yusuf
      </h1>

      <p className="mt-4 text-gray-400 text-lg">
        Software Developer • Security Enthusiast
      </p>

      <p className="mt-6 max-w-xl text-gray-300">
        Building secure and scalable systems with real-world impact.
      </p>

    </section>
  );
}