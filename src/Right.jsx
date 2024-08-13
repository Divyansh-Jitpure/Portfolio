import About from "./sections/About";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";
import { useInView } from "react-intersection-observer";
import Left from "./Left";
import ScrollTracker from "./components/ScrollTracker";
const Right = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView();
  const { ref: eduRef, inView: eduInView } = useInView();
  const { ref: skillsRef, inView: skillsInView } = useInView();
  const { ref: projectsRef, inView: projectsInView } = useInView();

  return (
    <>
      <ScrollTracker />
      <div className="relative mx-auto w-[85vw] laptop:flex laptop:gap-4">
        <Left
          isActive={{
            aboutInView,
            eduInView,
            skillsInView,
            projectsInView,
          }}
        />
        <div className="pb-10 text-white laptop:w-1/2 laptop:pt-24">
          <About aboutRef={aboutRef} />
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
