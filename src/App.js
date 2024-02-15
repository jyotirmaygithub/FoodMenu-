import React from "react";
import Menu from "./components/Extraction"
import data from "./components/data"

function App() {
  return (
    <div>
     <Menu menudata={data}/>
    </div>
  );
}

export default App;
