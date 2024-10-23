import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Main from "./Components/main";

function App() {
  return (
    <div className="App">
        <Router path="/">
          <Main/>
        </Router>
    </div>
  );
}

export default App;
