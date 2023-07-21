import ColorBox from "./ColorBox";
import "./ColorGrid.css";

export default function ColorGrid({pastelColors}) {
    const boxes= [];
    for (let i = 0; i < 25; i++) {
        boxes.push(<ColorBox colors={pastelColors}/>)
    }
    console.log(boxes)
    return (
        <div className="ColorGrid">{boxes}</div>
    )
}