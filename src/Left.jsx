import NavLinks from "./components/NavLinks";
import { SiGithub, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";

const Left = ({ isActive }) => {
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
        <li className="mr-5">
          <a target="_blank" href="https://github.com/Divyansh-Jitpure">
            <SiGithub className="h-7 w-7 text-slate-300 transition hover:text-cyan-400" />
          </a>
        </li>
        <li className="mr-5">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/divyansh-jitpure/"
          >
            <SiLinkedin className="h-7 w-7 text-slate-300 transition hover:text-cyan-400" />
          </a>
        </li>
        <li className="mr-5">
          <a target="_blank" href="https://twitter.com/DivyanshJitpure">
            <RiTwitterXFill className="h-8 w-8 text-slate-300 transition hover:text-cyan-400" />
          </a>
        </li>
        <li className="mr-5">
          <a target="_blank" href="https://www.instagram.com/one_divyansh/">
            <SiInstagram className="h-7 w-7 text-slate-300 transition hover:text-cyan-400" />
          </a>
        </li>
        <li className="mr-5">
          <a target="_blank" href="https://www.youtube.com/@one_Divyansh">
            <SiYoutube className="h-9 w-9 text-slate-300 transition hover:text-cyan-400" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Left;
