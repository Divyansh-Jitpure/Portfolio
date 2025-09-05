import React from "react";
import ExpCard from "../components/ExpCard";

const Education = ({ eduRef }) => {
  return (
    <section
      ref={eduRef}
      id="education"
      className="mb-24 scroll-mt-24 laptop:mb-32"
    >
      <h2 className="mb-5 text-2xl font-medium text-cyan-300">
        <u>Experience</u>
      </h2>
      <div className="motion-reduce group my-2 cursor-default rounded-md p-3 transition hover:bg-slate-500/20 hover:drop-shadow-lg">
        <h2 className="text-lg group-hover:text-cyan-400">
          Tata Consultancy Services
        </h2>
        <p className="text-base font-light text-slate-300/80">
          System Engineer
        </p>
        <p className="text-base font-light text-slate-300/80">
          Feb 2024 - Present | Indore, India
        </p>
        <p className="text-base font-light text-slate-300/80">
          — <span className="text-white">React Frontend Project</span>
          <span className="ml-1 text-sm">
            ( Tech Stack: React, JavaScript, HTML, CSS, API Integration )
          </span>
          <br /> Built responsive, component-based UIs with React, implementing
          state management, routing, and API integration. Focused on performance
          optimization and delivery of clean and reusable code aligned with best
          practices.
        </p>
        <p className="text-base font-light text-slate-300/80">
          — <span className="text-white">SAP ABAP Project</span> <br />
          Worked on a backend-focused project involving SAP ABAP, contributing
          to custom report generation, writing queries and small enhancements .
        </p>
      </div>
      <h2 className="mb-5 text-2xl font-medium text-cyan-300">
        <u>Education</u>
      </h2>
      <ExpCard
        institution="Oriental Institute Of Science And Technology"
        work="B.Tech"
        specialisation="Information Technology"
        duration="2019 - 2023"
        place="Bhopal, India"
        score="CGPA - 8.43"
      />
      <ExpCard
        institution="Govt. Excellence Higher Secondary School"
        work="Higher Secondary School Certificate"
        specialisation="12th"
        duration="2018 -2019"
        place="Athner, India"
        score="Percentage - 83%"
      />
      <ExpCard
        institution="Saraswati Shishu Vidhya Mandir High School"
        work="Secondary School Certificate"
        specialisation="10th"
        duration="2016 -2017"
        place="Athner, India"
        score="Percentage - 89%"
      />
    </section>
  );
};

export default Education;
