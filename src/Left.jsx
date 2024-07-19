import NavLinks from "./components/NavLinks";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";

const Left = ({ isActive }) => {
  return (
    <div className="sticky top-0 flex h-screen w-1/2 flex-col justify-between text-white py-24">
      <div className="">
        <h1 className="text-5xl text-cyan-300 font-bold">Divyansh Jitpure</h1>
        <h2 className="mt-3 text-lg font-medium">
          🌐 Web Developer | Front-End Enthusiast 🚀
        </h2>
      </div>

      {/* NavLinks */}
      <NavLinks isActive={isActive} />
      {/* Contact Links */}
      <ul className="flex ml-1 items-center ">
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
