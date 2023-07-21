import { useState } from "react"
import "./ColorBox.css";
import { paste } from "@testing-library/user-event/dist/paste";

const pastelColors = [
    "#FFDFD9",
    "#E6FFD9",
    "#E8D9FF",
    "#FFEBD9",
    "#D9FFFC",
    "#FFF5D9",
    "#D9FFE5",
    "#FFD9ED",
    "#E0FFD9",
    "#D9F2FF",
]

function randomChoice(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

export default function ColorBox() {
    const [ color, setColor ] = useState(randomChoice(pastelColors))


    const changeColor = ({colors}) => {
        const randomColor = randomChoice(pastelColors)
        setColor(randomColor);
    }

    return (
        <div onClick={changeColor} style={{backgroundColor: color}} className="box"></div>
    )
}