import React, { useEffect, useState } from "react";

const NavLinks = ({ activeSection }) => {
  return (
    <div className="my-10 hidden laptop:block">
      <Link title="About" goto="#about" active={activeSection === "about"} />
      <Link
        title="Experience"
        goto="#experience"
        active={activeSection === "experience"}
      />
      <Link
        title="Education"
        goto="#education"
        active={activeSection === "education"}
      />
      <Link title="Skills" goto="#skills" active={activeSection === "skills"} />
      <Link
        title="Projects"
        goto="#projects"
        active={activeSection === "projects"}
      />
    </div>
  );
};

const Link = (props) => {
  return (
    <a className="group flex items-center py-3" href={props.goto}>
      <span
        className={
          !props.active
            ? "mr-4 h-[2px] w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-cyan-100"
            : "lineA mr-4 h-[2px] w-16 bg-cyan-100 transition-all group-hover:w-16 group-hover:bg-cyan-100"
        }
      ></span>
      {/* group-focus-visible:w-16 group-focus-visible:bg-slate-200 */}
      <span
        className={
          !props.active
            ? "font-bold uppercase text-slate-500 group-hover:text-cyan-400"
            : "font-bold uppercase text-cyan-400 group-hover:text-cyan-400"
        }
      >
        {/* group-focus-visible:text-slate-200 */}
        {props.title}
      </span>
    </a>
  );
};

export default NavLinks;
