import { Canvas } from "@react-three/fiber";
import React from "react";
import Stars from "./Stars";

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default Background;
