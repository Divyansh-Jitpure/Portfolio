import React from "react";
import { FaReact } from "react-icons/fa";
import { PiFileCppFill } from "react-icons/pi";
import {
  SiCss3,
  SiFlask,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = ({ skillsRef }) => {
  const tails =
    "invisible w-[100px] bg-black/30 text-white text-center rounded-lg px-[5px] absolute z-[1] top-[90%] left-1/2 ml-[-50px] group-hover:visible";
  return (
    <section ref={skillsRef} id="skills" className=" mb-32 scroll-mt-24 ">
      <h2 className="text-2xl font-medium mb-5 text-cyan-300">
        <u>Skills</u>
      </h2>
      <div className="flex flex-wrap gap-3 mt-5">
        <div className="relative group inline-block transition hover:text-cyan-400">
          <FaReact className="text-7xl m-3" />
          <span className={tails}>React</span>
        </div>
        <div className="relative group inline-block transition hover:text-cyan-400">
          <SiJavascript className="text-7xl m-3" />
          <span className={tails}>JavaScript</span>
        </div>
        <div className="relative group inline-block transition hover:text-cyan-400">
          <SiHtml5 className="text-7xl m-3" />
          <span className={tails}>HTML</span>
        </div>
        <div className="relative group inline-block transition hover:text-cyan-400">
          <SiCss3 className="text-7xl m-3" />
          <span className={tails}>CSS</span>
        </div>
        <div className="relative group inline-block transition hover:text-cyan-400">
          <SiTailwindcss className="text-7xl m-3" />
          <span className={tails}>Tailwind</span>
        </div>
        <div className="relative group inline-block transition hover:text-cyan-400">
          <SiPython className="text-7xl m-3" />
          <span className={tails}>Python</span>
        </div>
        <div className="relative group inline-block transition hover:text-cyan-400">
          <PiFileCppFill className="text-7xl m-3" />
          <span className={tails}>C++</span>
        </div>
        <div className="relative group inline-block transition hover:text-cyan-400">
          <SiFlask className="text-7xl m-3" />
          <span className={tails}>Flask</span>
        </div>
        <div className="relative group inline-block transition hover:text-cyan-400">
          <SiGithub className="text-7xl m-3" />
          <span className={tails}>GitHub</span>
        </div>
        <div className="relative group inline-block transition hover:text-cyan-400">
          <VscVscode className="text-7xl m-3" />
          <span className={tails}>VS Code</span>
        </div>
      </div>
      <div className="text-center my-4">
        <a target="_blank" href="resume.pdf">
          <button className="text-white transition border-b-[1px] border-b-cyan-300 mt-10 py-2 px-6 focus:outline-none hover:bg-slate-500/20 hover:text-cyan-400 rounded-lg text-lg ">
            View Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Skills;
