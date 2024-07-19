import Badge from "../components/Badge";

const Project = (props) => {
  return (
    <a target="_blank" href={props.projectLink}>
      <div className="p-3 hover:bg-slate-500/20  hover:drop-shadow-lg rounded-md transition motion-reduce my-2 group">
        <h2 className="text-xl group-hover:text-cyan-400">{props.title}</h2>
        <p className="text-base font-light text-slate-300/80 group-hover:text-slate-300">
          {props.description}
        </p>
        <span className="flex pt-2 pb-1 gap-3 flex-wrap">
          {props.techStack?.map((tech, key) => {
            return <Badge key={key} title={tech} />;
          })}
        </span>
      </div>
    </a>
  );
};

export default Project;
