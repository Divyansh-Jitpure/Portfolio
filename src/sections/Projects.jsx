import React from "react";
import Project from "../components/Project";

const Projects = ({ projectsRef }) => {
  return (
    <section ref={projectsRef} id="projects" className="mb-24 scroll-mt-24">
      <h2 className="mb-5 text-2xl font-medium text-cyan-300">
        <u>Projects</u>
      </h2>

      <Project
        title="EditR - Image Editor"
        description="EditR! An image editor built with React, Tailwind CSS, and Firebase. 🎨 EditR offers filter tools like brightness, contrast, saturation, and exposure, plus transform tools such as rotate and flip. Enjoy a responsive UI and dynamic functionality. Edit, transform, and download your images effortlessly!"
        projectLink="https://the-editr.web.app/"
        techStack={["React JS", "Tailwind CSS", "Google Firebase"]}
      />
      <Project
        title="Divyansh Jitpure - Portfolio"
        description="My first Portfolio website built with React, Tailwind, ThreeJS etc. It showcases everything about my Skills, Experience and projects."
        projectLink="/"
        techStack={["React JS", "Tailwind CSS", "Three JS", "Google Firebase"]}
      />
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
    </section>
  );
};

export default Projects;
