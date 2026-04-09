import React from "react";
import "./GlideResultsDisplay.css";
import type { GlideResults } from "@/types/Glide.ts";
import GlideResultDisplay from "@/components/glide-results/GlideResultDisplay.tsx";

const GlideResultsDisplay = ({
  glideResults,
}: {
  glideResults: GlideResults;
}) => {
  return (
    <div className="results">
      {glideResults.map((result, i) => (
        <GlideResultDisplay key={i} glideResult={result} />
      ))}
    </div>
  );
};

export default GlideResultsDisplay;
