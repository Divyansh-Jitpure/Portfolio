import Contact from "./Contact";

const About = ({ aboutRef }) => {
  return (
      <section
        ref={aboutRef}
        id="about"
        className="mb-24 scroll-mt-24 flex flex-col gap-4 laptop:mb-32"
      >
        <h2 className="mb-6 text-2xl font-medium text-cyan-300 laptop:hidden">
          <u>About</u>
        </h2>
        <p>
          {/* Hey there! 👋 I'm Divyansh Jitpure, a web developer who loves working
          with front-end stuff like React, JavaScript, HTML, and CSS. I’m
          passionate about bringing creativity and functionality to every
          project I work on. */}
          {/* Hey there! 👋 I'm Divyansh Jitpure, a full-stack web developer with a
          passion for crafting dynamic and intuitive digital experiences. I
          specialize in React, Tailwind CSS, and JavaScript, and work across the
          full MERN stack — MongoDB, Express.js, React, and Node.js — to build
          scalable, end-to-end web applications. */}
          Hey there! 👋 I'm Divyansh Jitpure, a full-stack web developer passionate 
          about building scalable, user-friendly, and high-performance web applications. 
          I work across the MERN stack and Next.js, using React, TypeScript, Tailwind CSS, 
          Node.js, and modern web technologies to deliver end-to-end solutions.
        </p>
        <p>
          {/* 💻 I love transforming ideas into seamless and visually appealing user
          experiences and backing them with efficient, secure server-side logic.
          With my skills in React JS and Tailwind CSS, I aim to build
          interactive web apps that keep users engaged and to turn design ideas
          into elegant, responsive, and user-friendly interfaces. */}
          {/* 💻 I enjoy transforming ideas into sleek, responsive user experiences
          with React JS and Tailwind CSS, while supporting them with efficient,
          secure backend logic for fully interactive web apps. */}
          💻 I enjoy turning ideas into clean, responsive user interfaces with React 
          and Tailwind CSS, while also building secure and efficient backend services 
          using Next.js and Node.js. I have hands-on experience with REST APIs, authentication 
          (JWT & Auth0), and database modeling using MongoDB, with familiarity in PostgreSQL/Sequelize.
        </p>
        <p>
          🚀 I’m driven by writing clean, maintainable code, optimizing performance, and continuously learning new tools and best practices in the ever-evolving web ecosystem.
        </p>
        <p>
          When I'm not coding, you can find me exploring new Tech trends,
          playing Piano 🎹 and Guitar 🎸 or playing video games 🎮.
        </p>
        <Contact />
      </section>
  );
};

export default About;
