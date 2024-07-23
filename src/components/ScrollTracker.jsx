import React from "react";

const ScrollTracker = () => {
  return (
    <div className="scroll-tracker fixed left-[30px] top-full z-[1000] hidden h-screen w-[3px] bg-cyan-300 laptop:block">
      <span className="rocket">
        <img src="/rocket.png" />
      </span>
    </div>
  );
};

export default ScrollTracker;
