import Badge from "../components/Badge";
import { analytics } from "../firebase-config.js";
import { logEvent } from "firebase/analytics";
import ProjectPreview from "./ProjectPreview.jsx";
import { useState } from "react";

const Project = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <a
      onClick={() => {
        logEvent(analytics, `Opened ${props.title}`);
      }}
      target="_blank"
      href={props.projectLink}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project group my-2 rounded-md p-3 transition hover:bg-slate-500/20 hover:drop-shadow-lg">
        <h2 className="text-xl text-white group-hover:text-cyan-400">
          {props.title}
        </h2>
        <p className="text-base font-light text-slate-300/80 group-hover:text-slate-300">
          {props.description}
        </p>
        <span className="flex flex-wrap gap-3 pb-1 pt-2">
          {props.techStack?.map((tech, key) => {
            return <Badge key={key} title={tech} />;
          })}
        </span>
      </div>
      {isHovered && (
        <ProjectPreview
          prevSrc={props.src}
          yOffset={props.yOffSet}
          isVideo={props.isVideo}
        />
      )}
    </a>
  );
};

export default Project;
