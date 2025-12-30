import React from "react";

const Experience = ({ expRef }) => {
  return (
    <section
      ref={expRef}
      id="experience"
      className="mb-24 scroll-mt-24 laptop:mb-32"
    >
      <h2 className="mb-5 text-2xl font-medium text-cyan-300">
        <u>Experience</u>
      </h2>
      <div className="motion-reduce group my-2 cursor-default rounded-md p-3 transition hover:bg-slate-500/20 hover:drop-shadow-lg">
        <h2 className="text-lg group-hover:text-cyan-400">
          Bestpeers InfoSystem
        </h2>
        <p className="text-base font-light text-slate-300/80">
          Full Stack Software Engineer
        </p>
        <p className="text-base font-light text-slate-300/80">
          Sept 2025 - Present | Indore, India
        </p>

        <p className="mt-1 text-base font-light text-slate-300/80">
          — <span className="text-white">Full Stack Projects</span>
          <span className="ml-1 text-sm">
            ( React, Next.js, Node.js, TypeScript )
          </span>
        </p>

        <ul className="ml-5 mt-2 list-inside list-disc space-y-1 text-base font-light text-slate-300/80">
          <li>
            Built scalable full-stack applications using{" "}
            <span className="text-white">Next.js and React</span>, delivering
            responsive UIs and backend services.
          </li>
          <li>
            Developed REST APIs and authentication flows with{" "}
            <span className="text-white">JWT and Auth0</span>, ensuring secure
            client-server communication.
          </li>
          <li>
            Worked with <span className="text-white">MongoDB</span> and handled
            basic migrations using{" "}
            <span className="text-white">PostgreSQL/Sequelize</span>, while
            following clean code and Git-based workflows.
          </li>
        </ul>
      </div>

      <div className="motion-reduce group my-2 cursor-default rounded-md p-3 transition hover:bg-slate-500/20 hover:drop-shadow-lg">
        <h2 className="text-lg group-hover:text-cyan-400">
          Tata Consultancy Services
        </h2>
        <p className="text-base font-light text-slate-300/80">
          System Engineer
        </p>
        <p className="text-base font-light text-slate-300/80">
          Feb 2024 - Sept 2025 | Indore, India
        </p>

        <p className="mt-1 text-base font-light text-slate-300/80">
          — <span className="text-white">React Frontend Project</span>
          <span className="ml-1 text-sm">
            ( React, JavaScript, Tailwind CSS )
          </span>
        </p>

        <ul className="ml-5 mt-2 list-inside list-disc space-y-1 text-base font-light text-slate-300/80">
          <li>
            Built reusable and responsive UI components as a{" "}
            <span className="text-white">React.js developer</span> for a US
            banking client.
          </li>
          <li>
            Implemented state management using{" "}
            <span className="text-white">Context API and Redux</span> and
            integrated REST APIs with Axios.
          </li>
          <li>
            Focused on performance optimization, clean code, and Git-based
            collaboration.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
