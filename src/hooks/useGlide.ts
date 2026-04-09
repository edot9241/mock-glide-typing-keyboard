import { useRef, useState } from "react";
import type { GlideInput } from "@/types/Glide.ts";

const useGlide = (onNewGlideInput: (input: GlideInput) => void) => {
  const [isGliding, setIsGliding] = useState(false);
  const glideInput = useRef<GlideInput>([]);
  const lastChar = useRef<string | null>(null);

  const addToInput = (char: string) => {
    if (lastChar.current === char) {
      return;
    }

    lastChar.current = char;
    glideInput.current.push(char);
  };

  // If activated by the key - firstChar is the value of the key
  // If activated by empty space on keyboard - null
  const startGlide = (firstChar: string | null) => {
    if (firstChar) {
      addToInput(firstChar);
    }
    setIsGliding(true);
  };
  const glide = (char: string | null) => {
    if (isGliding && char) {
      addToInput(char);
    }
  };
  const stopGlide = () => {
    if (glideInput.current.length > 0) {
      onNewGlideInput(glideInput.current);
    }
    setIsGliding(false);
    glideInput.current = [];
    lastChar.current = null;
  };

  return {
    startGlide,
    glide,
    stopGlide,
    isGliding,
  };
};

export default useGlide;
