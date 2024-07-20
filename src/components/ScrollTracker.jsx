import React from "react";

const ScrollTracker = () => {
  return (
    <div className="hidden laptop:block scroll-tracker fixed left-[30px] top-full w-[3px] h-screen z-[1000] bg-cyan-300 ">
      <span className="rocket">
        <img src="/rocket.png" />
      </span>
    </div>
  );
};

export default ScrollTracker;
