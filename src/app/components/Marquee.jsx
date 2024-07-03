import React from "react";

const Marquee = () => {
  return (
    <div className="marquee-container relative flex w-screen -z-10">
      {[...Array(10)].map((u, i) => (
        <div key={i}>
          <div className="top-0 py-12 animate-marquee whitespace-nowrap w-full bg-black">
            <span className="text-4xl text-white mx-4">🌻 👋 //</span>
            <span className="text-4xl text-white mx-4">frontend developer //</span>
            <span className="text-4xl text-white mx-4">scrum master //</span>
            <span className="text-4xl text-white mx-4">designer //</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Marquee;
