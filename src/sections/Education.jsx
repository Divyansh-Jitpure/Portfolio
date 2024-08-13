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
          Assistant System Engineer
        </p>
        <p className="text-base font-light text-slate-300/80">
          Feb 2024 - Present | Indore, India
        </p>
        <p className="text-base font-light text-slate-300/80">
          — Worked on a project with tech stack HTML, CSS, Javascript, Python,
          Flask and SQLite in training.
        </p>
        <p className="text-base font-light text-slate-300/80">
          — Another project as a SAP ABAP Developer.
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
        score="CGPA - 8.34"
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
