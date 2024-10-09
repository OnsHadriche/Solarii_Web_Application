import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CustomerNavBar } from "./components/NavBar";
import "./App.css";
import SimpleNavBar from "./components/NavBar/SimpleNavBar";
import HomeHeader from "./components/Header/HomeHeader";

function App() {
  return (
    <>
      <div>
        <SimpleNavBar/>
        <HomeHeader/>
      </div>
    </>
  );
}

export default App;
