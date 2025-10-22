import React from "react";

const Subscribe = () => {
  return (
    <section className="bg-[#353448] text-white py-20 px-8 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Subscribe to get notified about update
      </h2>
      <p className="text-gray-400 mb-8 text-sm">
        By subscribing with your mail, you will accept our privacy policy
      </p>
      <div className="flex justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-64 rounded-r-none bg-[#42414fd2]"
        />
        <button className="btn bg-yellow-500 text-black border-none rounded-l-none  hover:bg-yellow-700">
          Subscribe us
        </button>
      </div>
    </section>
  );
};

export default Subscribe;
