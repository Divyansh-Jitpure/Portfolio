const ExpCard = (props) => {
  return (
    <div className="p-3 cursor-default hover:bg-slate-500/20  hover:drop-shadow-lg rounded-md transition motion-reduce my-2 group">
      <h2 className="text-lg group-hover:text-cyan-400">{props.institution}</h2>
      <p className="text-base font-light text-slate-300/80">
        {props.work
          ? props.work + " | " + props.specialisation
          : props.specialisation}
      </p>
      <p className="text-base font-light text-slate-300/80">
        {props.duration} | {props.place}
      </p>
      <p className="text-base font-light text-slate-300/80">{props.score}</p>
    </div>
  );
};

export default ExpCard;
