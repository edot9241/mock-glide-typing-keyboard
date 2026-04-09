import React, { useRef, useState } from "react";
import type { Trail } from "@/types/Trail.ts";
import type { Point2D } from "@/types/Math.ts";

// TODO: is there a better way?
const offScreenPos: Point2D = { x: -999, y: -999 };
const trailLength = 100;

const useMouseTrail = () => {
  const [trail, setTrail] = useState<Trail>(
    Array(trailLength).fill(offScreenPos),
  );
  const currentIndex = useRef(0);

  const incrementIndex = () => {
    const current = currentIndex.current;
    const next = current + 1;
    currentIndex.current = next > trailLength - 1 ? 0 : next;
  };

  const updateTrailAtCurrentIndex = (newValue: Point2D) => {
    setTrail((prevState) =>
      prevState.map((pos, i) => (i === currentIndex.current ? newValue : pos)),
    );
  };

  const updateMousePosition = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const newValue = { x: e.clientX, y: e.clientY };

    updateTrailAtCurrentIndex(newValue);
    incrementIndex();
  };

  return { trail, updateMousePosition };
};

export default useMouseTrail;
