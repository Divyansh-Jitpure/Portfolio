import React from "react";
import { FaReact } from "react-icons/fa";
import { PiFileCppFill } from "react-icons/pi";
import {
  SiCss3,
  SiFirebase,
  SiFlask,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = ({ skillsRef }) => {
  const tails =
    "invisible w-[100px] bg-black/30 text-white text-center rounded-lg px-[5px] absolute z-[1] top-[90%] left-1/2 ml-[-50px] group-hover:visible";
  return (
    <section
      ref={skillsRef}
      id="skills"
      className="mb-24 scroll-mt-24 laptop:mb-32"
    >
      <h2 className="mb-5 text-2xl font-medium text-cyan-300">
        <u>Skills</u>
      </h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <div className="group relative inline-block transition hover:text-cyan-400">
          <FaReact className="m-3 text-7xl" />
          <span className={tails}>React</span>
        </div>
        <div className="group relative inline-block transition hover:text-cyan-400">
          <SiJavascript className="m-3 text-7xl" />
          <span className={tails}>JavaScript</span>
        </div>
        <div className="group relative inline-block transition hover:text-cyan-400">
          <SiHtml5 className="m-3 text-7xl" />
          <span className={tails}>HTML</span>
        </div>
        <div className="group relative inline-block transition hover:text-cyan-400">
          <SiCss3 className="m-3 text-7xl" />
          <span className={tails}>CSS</span>
        </div>
        <div className="group relative inline-block transition hover:text-cyan-400">
          <SiTailwindcss className="m-3 text-7xl" />
          <span className={tails}>Tailwind</span>
        </div>
        <div className="group relative inline-block transition hover:text-cyan-400">
          <SiPython className="m-3 text-7xl" />
          <span className={tails}>Python</span>
        </div>
        <div className="group relative inline-block transition hover:text-cyan-400">
          <PiFileCppFill className="m-3 text-7xl" />
          <span className={tails}>C++</span>
        </div>
        <div className="group relative inline-block transition hover:text-cyan-400">
          <SiFlask className="m-3 text-7xl" />
          <span className={tails}>Flask</span>
        </div>
        <div className="group relative inline-block transition hover:text-cyan-400">
          <SiGithub className="m-3 text-7xl" />
          <span className={tails}>GitHub</span>
        </div>
        <div className="group relative inline-block transition hover:text-cyan-400">
          <SiFirebase className="m-3 text-7xl" />
          <span className={tails}>Firebase</span>
        </div>
        <div className="group relative inline-block transition hover:text-cyan-400">
          <VscVscode className="m-3 text-7xl" />
          <span className={tails}>VS Code</span>
        </div>
        <div className="group relative inline-block transition hover:text-cyan-400">
          <SiVite className="m-3 text-7xl" />
          <span className={tails}>Vite</span>
        </div>
      </div>
      <div className="text-center">
        <a target="_blank" href="resume.pdf">
          <button className="mt-10 rounded-lg border-b-[1px] border-b-cyan-300 px-6 py-2 text-lg text-white transition hover:bg-slate-500/20 hover:text-cyan-400 focus:outline-none">
            View Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Skills;
