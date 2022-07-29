import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import * as data from './Data.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage homeData={data}/>
    </div>
  );
}

export default App;
