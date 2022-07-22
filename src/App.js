import "./App.css";

import Navbar from "./Components/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import EachProductSection from "./Components/EachProductSection/EachProductSection";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/products/:id"
          element={<EachProductSection></EachProductSection>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
