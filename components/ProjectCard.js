import React from "react";
import CustomLink from "./common/CustomLink";

function ProjectCard({ project }) {
  return (
    <li className="mt-2 mb-2">
      <CustomLink
        href={project.link || project.github}
        isNoramlATag={true}
        className="p-1 text-gray-600 font-medium hover:text-gray-700"
      >
        {project.name}
      </CustomLink>
    </li>
  );
}

export default ProjectCard;
