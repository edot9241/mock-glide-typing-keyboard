import React, { useRef } from "react";
import { isInsideRect } from "@/utils/MathUtils.ts";
import type { Point2D, Rect2D } from "@/types/Math.ts";

export const usePointerHover = () => {
  const keyRefs = useRef<(Element | null)[]>([]);

  const setRef = (index: number) => {
    return (element: Element | null) => (keyRefs.current[index] = element);
  };

  const getHoveredElement = (e: React.PointerEvent<HTMLDivElement>) => {
    const keys = keyRefs.current;
    if (!keys) {
      return null;
    }

    const x = e.pageX;
    const y = e.pageY;
    const point: Point2D = { x, y };

    const key = keys.find((key) => {
      if (!key) {
        return false;
      }

      const rect = key.getBoundingClientRect() as Rect2D;
      return isInsideRect(rect, point);
    });

    if (!key) {
      return null;
    }

    return key.textContent;
  };

  return { setRef, getHoveredElement };
};
