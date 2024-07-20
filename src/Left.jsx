import NavLinks from "./components/NavLinks";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";

const Left = ({ isActive }) => {
  return (
    <div className="laptop:sticky laptop:top-0 laptop:flex laptop:h-screen laptop:w-1/2 laptop:flex-col laptop:justify-between text-white pt-14 pb-20 laptop:py-20">
      <div className="">
        <h1 className="text-5xl text-cyan-300 font-bold">Divyansh Jitpure</h1>
        <h2 className="hidden laptop:block mt-4 text-lg font-medium">
          🌐 Web Developer | Front-End Enthusiast 🚀
        </h2>
        <h2 className="laptop:hidden mt-4 text-lg font-medium">
          🌐 Web Developer
        </h2>
        <h2 className="laptop:hidden mt-3 text-lg font-medium">
          🚀 Front-End Enthusiast
        </h2>
      </div>

      {/* NavLinks */}
      <NavLinks isActive={isActive} />
      {/* Contact Links */}
      <ul className="flex ml-1 items-center laptop:mt-0 mt-10">
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
      </ul>
    </div>
  );
};

export default Left;
