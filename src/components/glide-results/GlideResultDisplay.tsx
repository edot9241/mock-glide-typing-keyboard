import React from "react";
import "./GlideResultDisplay.css";
import type { GlideResult } from "@/types/Glide.ts";

const GlideResultDisplay = ({ glideResult }: { glideResult: GlideResult }) => {
  return <div className="result">{JSON.stringify(glideResult)}</div>;
};

export default GlideResultDisplay;
