const ExpCard = (props) => {
  return (
    <div className="motion-reduce group my-2 cursor-default rounded-md p-3 transition hover:bg-slate-500/20 hover:drop-shadow-lg">
      <h2 className="text-lg group-hover:text-cyan-400">{props.institution}</h2>
      <p className="text-base font-light text-slate-300/80">
        {props.work + " | " + props.specialisation}
      </p>
      <p className="text-base font-light text-slate-300/80">
        {props.duration} | {props.place}
      </p>
      <p className="text-base font-light text-slate-300/80">{props.score}</p>
    </div>
  );
};

export default ExpCard;
