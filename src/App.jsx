import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import First from "./first/First";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Result from "./first/Result";

function App() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/result" element={<Result/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
