import React from "react";
import "./index.css";

const FlipperTile = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div
      className={`card ${isFlipped ? "flip" : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`front ${isFlipped ? "hidden" : ""}`}>{front}</div>

      <div className={`back ${isFlipped ? "" : "hidden"}`}>{back}</div>
    </div>
  );
};

export default FlipperTile;
