import React from "react";
import "./Keyboard.css";
import Key from "@/components/keyboard/key/Key.tsx";
import type { GlideInput } from "@/types/Glide.ts";
import useGlide from "@/hooks/useGlide.ts";
import useMouseTrail from "@/hooks/useMouseTrail.ts";
import MouseTrail from "@/components/keyboard/trail/MouseTrail.tsx";
import { usePointerHover } from "@/hooks/usePointerHover.ts";

const qwertyLayoutChars = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["x", "c", "v", "b", "n", "m"],
];

const Keyboard = ({
  onNewGlideInput,
}: {
  onNewGlideInput: (input: GlideInput) => void;
}) => {
  const { setRef, getHoveredElement } = usePointerHover();
  const { trail, updateMousePosition } = useMouseTrail();
  const { startGlide, glide, stopGlide, isGliding } = useGlide(onNewGlideInput);

  const prepareRows = () => {
    let i = 0;
    return qwertyLayoutChars.map((row) => {
      return row.map((char) => (
        <Key key={char} setRef={setRef(i++)} char={char} />
      ));
    });
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    startGlide(getHoveredElement(e));
  };
  const handlePointerUp = () => {
    stopGlide();
  };
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isGliding) {
      glide(getHoveredElement(e));
      updateMousePosition(e);
    }
  };
  const handlePointerLeave = () => {
    stopGlide();
  };

  const rows = prepareRows();

  return (
    <>
      <div
        className="keyboard"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {rows.map((row, i) => (
          <div className="row" key={i}>
            {row}
          </div>
        ))}
      </div>
      <MouseTrail trail={trail} />
    </>
  );
};

export default Keyboard;
