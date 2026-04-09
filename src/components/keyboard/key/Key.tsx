import React from "react";
import "./Key.css";

const Key = ({
  setRef,
  char,
}: {
  setRef: (e: Element | null) => void;
  char: string;
}) => {
  return (
    <div ref={setRef} className="key">
      {char}
    </div>
  );
};

export default Key;
