import React from "react";

const Footer = () => {
  return (
    <div className="text-center">
      <span className="text-slate-300/80">
        &copy; 2024 All Rights Reserved{" "}
        <span className="hidden laptop:inline">—</span>{" "}
      </span>
      <a
        className="block text-slate-200 hover:text-cyan-300 laptop:inline"
        href="https://github.com/Divyansh-Jitpure"
        target="_blank"
      >
        @Divyansh Jitpure
      </a>
    </div>
  );
};

export default Footer;
