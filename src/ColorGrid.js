import ColorBox from "./ColorBox";
import "./ColorGrid.css";
import { useState } from "react";

export default function ColorGrid({ pastelColors }) {
  const [idCounter, setIdCounter] = useState(1);

  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox pastelColors={pastelColors} key={idCounter + i} />);
  }
// The key for each ColorBox is calculated by adding the loop index i to the idCounter. Like this every ColorBox has a unique key.
 
  return <div className="ColorGrid">{boxes}</div>;
}
