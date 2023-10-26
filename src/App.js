import "./App.css";
import randomstring from "randomstring";
import person from "./Person";
import { num1, num2 } from "./Utility";
// import { sum as zbroj } from "./Utility";
import * as Math from "./Utility";
// import Komponenta1 from "./Components/Komponenta1";
// import Komponenta2 from "./Components/Komponenta2";
// import Komponenta3 from "./Components/Komponenta3";
import { Komponenta1, Komponenta2, Komponenta3 } from "./Components/index";
function App() {
  return (
    <div className="App">
      <Komponenta1 />
      <Komponenta2 />
      <Komponenta3 />
      <h1>Bok {person.name} </h1>
      <p>Moja prva aplikacija</p>
      <p>{randomstring.generate({ length: 12, charset: "alphabetic" })}</p>
      <p>Prvi broj:{num1}</p>
      <p>Drugi broj:{num2}</p>
      {/* <p>Zbroj:{zbroj(num1, num2)}</p> */}
      <hr></hr>
      <p>Zbroj brojeva je : {Math.sum(Math.num1, Math.num2)}</p>
    </div>
  );
}

export default App;
