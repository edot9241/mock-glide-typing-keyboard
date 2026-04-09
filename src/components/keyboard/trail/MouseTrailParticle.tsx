import React, { useEffect, useState } from "react";
import "./MouseTrailParticle.css";
import type { Point2D } from "@/types/Math.ts";

const MouseTrailParticle = ({ position }: { position: Point2D }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeOutTimeoutId = setTimeout(() => {
      setIsFading(true);
    }, 250);

    return () => {
      clearTimeout(fadeOutTimeoutId);
      setIsFading(false);
    };
  }, [position]);

  return (
    <div
      className={"particle " + (isFading ? "fading" : "")}
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default MouseTrailParticle;
