"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python </li>
        <li>C++</li>
        <li>SQL</li>
        <li>PostgreSQL</li>
        <li>R</li>
        <li>SAS</li>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>React.js</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>M.S. Computational Chemistry, University of Waterloo</li>
        <li>B.S. Chemistry Hounours, University of Waterloo</li>

      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Machine Learning Specialization</li>
        <li>Google Data Analytics Specialization</li>
        <li>Microsoft Certified: Power BI Data Analyst Associate</li>
        <li>Tableau Desktop Specialist</li>
        <li>SAS Certified Specialist: Base Programming Using SAS 9.4</li>
        <li>SAS Certified Professional: Advanced Programming Using SAS 9.4</li>
      </ul>
    ),
  },  
  {
    title: "Awards",
    id: "awards",
    content: (
      <ul className="list-disc pl-2">
        <li>Top 1 Team in 2023 Canaidian Quantum Cup</li>
        <li>Kaggle Silver Medal in Mechanisms of Action (MoA) Prediction</li>
        <li>Graduate Student Research Dissemination Award</li>
        <li>Science Graduate Award</li>
        <li>Graduate Scholarship</li>
        <li>Graduate Research Studentship </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/01.JPG" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a quantum chemistry algorithm research assistant at University of Waterloo.
            I am also working remotely as a data analyst intern at a VS consulting group.
            I have experience working with Python, SQL, PostgreSQL, C++, SAS, JavaScript, React, Node.js,
            HTML, CSS, and Git. I am passionate about Quantum Computing and Data Science. 
            I am a quick learner and I am always looking to expand my knowledge and skill set. 
            I am excited to work with others to create amazing projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("awards")}
              active={tab === "awards"}
            >
              {" "}
              Awards{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
