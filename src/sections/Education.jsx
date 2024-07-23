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
      <ExpCard
        institution="Tata Consultancy Services"
        specialisation="Assistant System Engineer"
        duration="2024 - Present"
        place="Indore, India"
      />
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
