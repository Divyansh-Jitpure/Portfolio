import About from "./sections/About";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";
import { useInView } from "react-intersection-observer";
import Left from "./Left";
import ScrollTracker from "./components/ScrollTracker";
import Experience from "./sections/Experience";
import { useState } from "react";

const Right = () => {
  const [activeSection, setActiveSection] = useState("about");

  const options = {
    threshold: 0.6,
  };

  const useSectionInView = (id) => {
    const { ref } = useInView({
      ...options,
      onChange: (inView) => {
        if (inView) setActiveSection(id);
      },
    });
    return ref;
  };

  const aboutRef = useSectionInView("about");
  const expRef = useSectionInView("experience");
  const eduRef = useSectionInView("education");
  const skillsRef = useSectionInView("skills");
  const projectsRef = useSectionInView("projects");

  return (
    <>
      <ScrollTracker />
      <div className="relative mx-auto w-[85vw] laptop:flex laptop:gap-4">
        <Left activeSection={activeSection} />
        <div className="pb-10 text-white laptop:w-1/2 laptop:pt-24">
          <About aboutRef={aboutRef} />
          <Experience expRef={expRef} />
          <Education eduRef={eduRef} />
          <Skills skillsRef={skillsRef} />
          <Projects projectsRef={projectsRef} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Right;
