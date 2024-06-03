import React from "react";

const Marquee = () => {
  return (
    <div className="marquee-container relative flex w-full rotate-12">
      <div class="py-12 animate-marquee whitespace-nowra">
        <span className="text-4xl text-white mx-4">frontend developer //</span>
        <span className="text-4xl text-white mx-4">scrum master //</span>
        <span className="text-4xl text-white mx-4">designer</span>
      </div>

      <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        <span className="text-4xl text-white mx-4">frontend developer //</span>
        <span className="text-4xl text-white mx-4">scrum master //</span>
        <span className="text-4xl text-white mx-4">designer</span>
      </div>
    </div>
  );
};

export default Marquee;
