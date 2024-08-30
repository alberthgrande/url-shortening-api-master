import React from "react";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="main-wrapper">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
