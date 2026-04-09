import type { Point2D, Rect2D } from "@/types/Math.ts";

export const distance = (p0: Point2D, p1: Point2D) =>
  Math.hypot(p1.x - p0.x, p1.y - p0.y);

// Inclusive range
export const isWithin = (value: number, min: number, max: number) => {
  return value >= min && value <= max;
};

export const isInsideRect = (rect: Rect2D, p: Point2D) => {
  const minX = rect.x;
  const maxX = rect.x + rect.width;

  const minY = rect.y;
  const maxY = rect.y + rect.height;

  return isWithin(p.x, minX, maxX) && isWithin(p.y, minY, maxY);
};
