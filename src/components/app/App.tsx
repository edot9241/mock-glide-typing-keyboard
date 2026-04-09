import React, { useState } from "react";
import "./App.css";
import Keyboard from "@/components/keyboard/Keyboard.tsx";
import GlideResultsDisplay from "@/components/glide-results/GlideResultsDisplay.tsx";
import type { GlideInput, GlideResults } from "@/types/Glide.ts";
import { guessWords } from "@/utils/GlideUtils.ts";

const App = () => {
  const [glideResults, setGlideResults] = useState<GlideResults>([]);

  const addGlideResult = (input: GlideInput) => {
    const result = { chars: input, words: guessWords(input) };
    setGlideResults((prevState) => [...prevState, result]);
  };

  return (
    <div className="app">
      <GlideResultsDisplay glideResults={glideResults} />
      <Keyboard onNewGlideInput={addGlideResult} />
    </div>
  );
};

export default App;
