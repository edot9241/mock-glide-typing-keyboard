import React from "react";
import "./MouseTrail.css";
import MouseTrailParticle from "@/components/keyboard/trail/MouseTrailParticle.tsx";
import type { Trail } from "@/types/Trail.ts";

const MouseTrail = ({ trail }: { trail: Trail }) => {
  return (
    <>
      {trail.map((position, i) => (
        <MouseTrailParticle key={i} position={position} />
      ))}
    </>
  );
};

export default MouseTrail;
