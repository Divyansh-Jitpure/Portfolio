import React from "react";

const Badge = ({ title }) => {
  return (
    <div className="  px-4 w-max rounded-full  bg-cyan-800/50 text-cyan-400">
      {title}
    </div>
  );
};

export default Badge;
