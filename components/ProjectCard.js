import React from "react";
import CustomLink from "./common/CustomLink";

function ProjectCard({ project }) {
  return (
    <CustomLink href={project.link || project.github} isNoramlATag={true}>
      <div className="px-3 py-2 my-2 border rounded hover:shadow">
        <h3 className="text-gray-700 font-medium text-lg sm:text-xl">
          {project.name}
        </h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </CustomLink>
  );
}

export default ProjectCard;
