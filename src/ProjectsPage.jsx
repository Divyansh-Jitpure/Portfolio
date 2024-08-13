import React from "react";
import Project from "./components/Project";

const ProjectsPage = () => {
  return (
    <>
      <div className="relative mx-auto px-56 pt-24">
        <h1 className="mb-5 text-center text-4xl font-medium text-cyan-300">
          Projects
        </h1>
        <Project
          title="CooPalette"
          description="COOPALETTE is a web-based color palette generator that offers an endless array of color combinations and their corresponding Hex Codes. Whether you're a designer seeking inspiration or a developer looking to enhance visual aesthetics, COOPALETTE has you covered."
          projectLink="https://coopalette.web.app/"
          techStack={["HTML", "CSS", "JavaScript", "Google Firebase"]}
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
        />
      </div>
    </>
  );
};

export default ProjectsPage;
