import React from "react";
import { Project } from "@interfaces/common";

type Project2Props = {
  project: Project;
};

const Project2: React.FC<Project2Props> = ({ project }) => {
  const { img, alt, title, description, link } = project;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="project__img" src={img} alt={alt} />
      <div className="project__metadata">
        <h3 className="project__metadata__title">{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Project2;
