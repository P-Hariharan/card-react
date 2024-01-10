import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Tours from "./components/tours/Tours";
import Header from "./components/header/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Home />
        <About />
        <Tours />
      </div>
    </>
  );
}

export default App;
