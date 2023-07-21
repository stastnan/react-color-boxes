import './App.css';
import ColorGrid from './ColorGrid';

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

function App() {
  return (
    <div>
      <ColorGrid colors={pastelColors}/>
    </div>
  );
}

export default App;
