import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SurfacePage from "./pages/SurfacePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surface" element={<SurfacePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;