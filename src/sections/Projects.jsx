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
        title="PassWired - Secure Password Manager App (PWA)"
        description="PassWired is a Secure, mobile-first Password Manager Progressive Web App (PWA) built with the MERN
stack, enabling users to store, view and manage encrypted credentials behind a customizable App PIN. It utilizes AES-256 encryption for secure password storage and enforces PIN verification before every sensitive
interaction."
        projectLink="https://pass-wired.web.app/"
        techStack={[
          "React JS",
          "Express Js",
          "MongoDB",
          "Tailwind CSS",
          "Node JS",
          "Redux",
        ]}
        src="passwired.png"
        yOffSet={130}
        ht={{ h: 210, w: "max-content" }}
      />
      <Project
        title="ResuFusion - Resume Builder"
        description=" ResuFusion is a dynamic resume builder built with the MERN stack that allows users to create, edit, preview, and download professional resumes with a clean PDF layout in real-time. Features a multi-step form, live preview, and multiple sections including education, experience, projects, skills, and more."
        projectLink="https://resufusion.web.app/"
        techStack={[
          "React JS",
          "Express Js",
          "MongoDB",
          "Tailwind CSS",
          "Node JS",
        ]}
        src="resuFusion2.png"
        yOffSet={90}
      />

      <Project
        title="Divyansh Jitpure - Portfolio"
        description="My first Portfolio website built with React, Tailwind, ThreeJS etc. It showcases everything about my Skills, Experience and projects."
        projectLink="/"
        techStack={["React JS", "Tailwind CSS", "Three JS", "Firebase"]}
        src="port.png"
        yOffSet={80}
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
