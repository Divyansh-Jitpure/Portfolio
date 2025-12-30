import React from "react";
import { FaReact } from "react-icons/fa";
import { PiFileCppFill } from "react-icons/pi";
import { DiNodejs } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiCss3,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { analytics } from "../firebase-config.js";
import { logEvent } from "firebase/analytics";

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
      <div className="mt-5 flex flex-wrap lg:gap-3">
        <div className="group relative inline-block transition hover:text-cyan-400">
          <FaReact className="m-3 text-7xl" />
          <span className={tails}>React JS</span>
        </div>
        <div className="group relative inline-block transition hover:text-cyan-400">
          <SiNextdotjs className="m-3 text-7xl" />
          <span className={tails}>Next JS</span>
        </div>
        <div className="group relative inline-block transition hover:text-cyan-400">
          <SiExpress className="m-3 text-7xl" />
          <span className={tails}>Express JS</span>
        </div>
        <div className="group relative inline-block transition hover:text-cyan-400">
          <SiMongodb className="m-3 text-7xl" />
          <span className={tails}>MongoDB</span>
        </div>
        <div className="group relative inline-block transition hover:text-cyan-400">
          <DiNodejs className="m-3 scale-[150%] text-7xl" />
          <span className={tails}>Node JS</span>
        </div>
        <div className="group relative inline-block transition hover:text-cyan-400">
          <SiTypescript className="m-3 text-7xl" />
          <span className={tails}>TypeScript</span>
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
          <TbBrandRedux className="m-3 text-7xl" />
          <span className={tails}>Redux</span>
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
          <button
            onClick={() => {
              logEvent(analytics, "Opened Resume");
            }}
            className="mt-10 rounded-lg border-b-[1px] border-b-cyan-300 px-6 py-2 text-lg text-white transition hover:bg-slate-500/20 hover:text-cyan-400 focus:outline-none"
          >
            View Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Skills;
