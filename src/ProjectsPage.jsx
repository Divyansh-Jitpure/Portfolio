import React from "react";
import Project from "./components/Project";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const ProjectsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="absolute left-2 top-6 z-50 flex items-center rounded-lg border-r-[1px] border-r-cyan-300 px-4 py-2 text-lg text-white transition hover:bg-slate-500/20 hover:text-cyan-400"
      >
        <FaArrowLeftLong className="mr-2" /> Go Back
      </button>
      <div className="relative mx-auto px-4 pt-24 lg:px-56">
        <h1 className="mb-5 text-center text-4xl font-medium text-cyan-300">
          All Projects
        </h1>
        <Project
          title="CooPalette"
          description="COOPALETTE is a web-based color palette generator that offers an endless array of color combinations and their corresponding Hex Codes. Whether you're a designer seeking inspiration or a developer looking to enhance visual aesthetics, COOPALETTE has you covered."
          projectLink="https://coopalette.web.app/"
          techStack={["HTML", "CSS", "JavaScript", "Google Firebase"]}
          src="src/assets/cooVid.mp4"
          yOffSet={80}
          isVideo={true}
        />
        <Project
          title="Games Of Web"
          description="Games of Web is a platform featuring a collection of simple and engaging web-based games."
          projectLink="https://games-of-web.web.app/"
          techStack={[
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind CSS",
            "Google Firebase",
          ]}
          src="src/assets/gow.png"
          yOffSet={80}
        />
      </div>
    </>
  );
};

export default ProjectsPage;
