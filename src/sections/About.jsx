import Contact from "./Contact";

const About = ({ aboutRef }) => {
  return (
    <>
      <section ref={aboutRef} id="about" className="mb-32 scroll-mt-24 ">
        <h2 className="laptop:hidden text-2xl font-medium mb-6 text-cyan-300">
          <u>About</u>
        </h2>
        <p className="mb-4">
          Hey there! 👋 I'm Divyansh Jitpure, a web developer who loves working
          with front-end stuff like React, JavaScript, HTML, and CSS. I’m
          passionate about bringing creativity and functionality to every
          project I work on.
        </p>
        <p className="mb-4">
          💻 I enjoy creating seamless and visually appealing user experiences.
          With my skills in React JS and Tailwind CSS, I aim to build
          interactive web apps that keep users engaged and to turn design ideas
          into elegant, responsive, and user-friendly interfaces.
        </p>
        <p className="mb-4">
          When I'm not coding, you can find me exploring new Tech trends,
          playing The Piano 🎹 or playing video games 🎮.
        </p>
        <Contact />
      </section>
    </>
  );
};

export default About;
