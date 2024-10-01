import React from "react";
import Project from "../components/Project";
import { useNavigate } from "react-router-dom";

const Projects = ({ projectsRef }) => {
  const navigate = useNavigate();
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
        src="src/assets/editr.png"
        yOffSet={75}
      />
      <Project
        title="Divyansh Jitpure - Portfolio"
        description="My first Portfolio website built with React, Tailwind, ThreeJS etc. It showcases everything about my Skills, Experience and projects."
        projectLink="/"
        techStack={["React JS", "Tailwind CSS", "Three JS", "Google Firebase"]}
        src="src/assets/port.png"
        yOffSet={65}
      />
      <Project
        title="Prayog Crafts"
        description="Prayog Crafts, an e-commerce platform dedicated to selling electronic DIY kits. These kits are perfect for small electronics projects, prototyping, and DIY automation. The website boasts a fully responsive and dynamic UI, ensuring a seamless  user experience across all devices."
        projectLink="https://prayog-crafts.web.app/"
        techStack={["React JS", "Tailwind CSS", "Three JS", "Google Firebase"]}
        src="src/assets/prayogCraft.png"
        yOffSet={70}
      />
      <div className="text-center">
        <button
          onClick={() => {
            navigate("/projects");
            logEvent(analytics, "Opened More Projects");
          }}
          className="rounded-lg border-b-[1px] border-b-cyan-300 px-6 py-2 text-lg text-white transition hover:bg-slate-500/20 hover:text-cyan-400 focus:outline-none"
        >
          View all Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
