import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Game } from "./pages/Game";
import { Simulation } from "./pages/Simulation";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
