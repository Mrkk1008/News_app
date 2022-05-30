import "./App.css";
import React, { Component } from "react";
import Navbar  from "./Components/Navbar";
import News from "./Components/News";

//News API Key:- 1e5c31851ba1418d865b8564faa9d3ec

class App extends Component {
  render() {
    return (
      
      <>
      <div>
          <Navbar />
          <News/>
      </div>
      </>
    );
  }
}
export default App;
