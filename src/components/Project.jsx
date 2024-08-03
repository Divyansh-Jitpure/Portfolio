import Badge from "../components/Badge";
import { analytics } from "../firebase-config.js";
import { logEvent } from "firebase/analytics";

const Project = (props) => {
  return (
    <a
      onClick={() => {
        logEvent(analytics, `Opened ${props.title}`);
      }}
      target="_blank"
      href={props.projectLink}
    >
      <div className="motion-reduce group my-2 rounded-md p-3 transition hover:bg-slate-500/20 hover:drop-shadow-lg">
        <h2 className="text-xl group-hover:text-cyan-400">{props.title}</h2>
        <p className="text-base font-light text-slate-300/80 group-hover:text-slate-300">
          {props.description}
        </p>
        <span className="flex flex-wrap gap-3 pb-1 pt-2">
          {props.techStack?.map((tech, key) => {
            return <Badge key={key} title={tech} />;
          })}
        </span>
      </div>
    </a>
  );
};

export default Project;
