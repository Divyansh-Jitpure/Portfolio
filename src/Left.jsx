import NavLinks from "./components/NavLinks";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { RiTwitterXFill, RiYoutubeLine } from "react-icons/ri";
import { analytics } from "./firebase-config.js";
import { logEvent } from "firebase/analytics";

const Left = ({ isActive }) => {
  const tails =
    "invisible w-[100px] bg-black/30 text-white text-center rounded-lg mt-2 px-[5px] absolute z-[1] top-[90%] left-1/2 ml-[-50px] group-hover:visible";

  return (
    <div className="pb-20 pt-14 text-white laptop:sticky laptop:top-0 laptop:flex laptop:h-screen laptop:w-1/2 laptop:flex-col laptop:justify-between laptop:py-20">
      <div className="">
        <h1 className="text-5xl font-bold text-cyan-300">Divyansh Jitpure</h1>
        <h2 className="mt-4 hidden text-lg font-medium laptop:block">
          🌐 Web Developer | Front-End Enthusiast 🚀
        </h2>
        <h2 className="mt-4 text-lg font-medium laptop:hidden">
          🌐 Web Developer
        </h2>
        <h2 className="mt-3 text-lg font-medium laptop:hidden">
          🚀 Front-End Enthusiast
        </h2>
      </div>

      {/* NavLinks */}
      <NavLinks isActive={isActive} />
      {/* Contact Links */}
      <ul className="ml-1 mt-10 flex items-center laptop:mt-0">
        <li className="group relative mr-5">
          <a
            onClick={() => {
              logEvent(analytics, "Opened GitHub");
            }}
            target="_blank"
            href="https://github.com/Divyansh-Jitpure"
          >
            <SiGithub className="h-7 w-7 text-slate-300 transition hover:text-cyan-400" />
            <span className={tails}>GitHub</span>
          </a>
        </li>
        <li className="group relative mr-5">
          <a
            onClick={() => {
              logEvent(analytics, "Opened LinkedIn");
            }}
            target="_blank"
            href="https://www.linkedin.com/in/divyansh-jitpure/"
          >
            <SiLinkedin className="h-7 w-7 text-slate-300 transition hover:text-cyan-400" />
            <span className={tails}>LinkedIn</span>
          </a>
        </li>
        <li className="group relative mr-5">
          <a
            onClick={() => {
              logEvent(analytics, "Opened Twitter");
            }}
            target="_blank"
            href="https://twitter.com/DivyanshJitpure"
          >
            <RiTwitterXFill className="h-8 w-8 text-slate-300 transition hover:text-cyan-400" />
            <span className={tails}>Twitter</span>
          </a>
        </li>
        <li className="group relative mr-5">
          <a
            onClick={() => {
              logEvent(analytics, "Opened Instagram");
            }}
            target="_blank"
            href="https://www.instagram.com/one_divyansh/"
          >
            <SiInstagram className="h-7 w-7 text-slate-300 transition hover:text-cyan-400" />
            <span className={tails}>Instagram</span>
          </a>
        </li>
        <li className="group relative mr-5">
          <a
            onClick={() => {
              logEvent(analytics, "Opened YouTube");
            }}
            target="_blank"
            href="https://www.youtube.com/@one_Divyansh"
          >
            <RiYoutubeLine className="h-10 w-10 text-slate-300 transition hover:text-cyan-400" />
            <span className={tails}>YouTube</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Left;
