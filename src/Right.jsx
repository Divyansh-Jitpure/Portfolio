import React, { useEffect, createContext } from "react";
import About from "./sections/About";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { useInView } from "react-intersection-observer";
import Left from "./Left";

const Right = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView();
  const { ref: eduRef, inView: eduInView } = useInView();
  const { ref: skillsRef, inView: skillsInView } = useInView();
  const { ref: projectsRef, inView: projectsInView } = useInView();

  return (
    <>
      <Left
        isActive={{
          aboutInView,
          eduInView,
          skillsInView,
          projectsInView,
        }}
      />
      <div className="w-1/2 text-white pt-24 py-24">
        <About aboutRef={aboutRef} />
        <Education eduRef={eduRef} />
        <Skills skillsRef={skillsRef} />
        <Projects projectsRef={projectsRef} />
      </div>
    </>
  );
};

export default Right;
