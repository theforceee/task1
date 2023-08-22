import React from "react";

const HomeIntro = () => {
  return (
    <section className="heroSection h-[20rem] w-full max-w-7xl flex justify-center flex-col items-center text-white gap-3">
      <button className="btnAction" onClick={() => alert("Home")}>
        Home
      </button>
      <button className="btnAction" onClick={() => alert("Learn More")}>
        Learn More
      </button>
      <button className="btnAction" onClick={() => alert("Why")}>
        Why
      </button>
    </section>
  );
};

export default HomeIntro;
