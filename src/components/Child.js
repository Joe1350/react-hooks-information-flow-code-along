import React from "react";
import { getRandomColor } from "../data/randomColorGenerator";
// import { getRandomColor } from "../data/randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor)
  }

  return (
    <div
      className="child"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    />
  )
}

export default Child;
