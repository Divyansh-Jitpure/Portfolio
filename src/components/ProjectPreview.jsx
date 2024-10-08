import React, { useEffect, useState } from "react";

const ProjectPreview = ({ prevSrc, yOffset, isVideo }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] hidden w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-slate-400/30 px-2 pt-2 backdrop-blur-sm laptop:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y - yOffset}px`,
      }}
    >
      {isVideo ? (
        <video autoPlay loop muted>
          <source src={prevSrc} type="video/mp4" />
        </video>
      ) : (
        <img src={prevSrc} alt="Project Preview" />
      )}

      <p className="my-1 text-sm text-slate-300">Click To Explore</p>
    </div>
  );
};

export default ProjectPreview;
