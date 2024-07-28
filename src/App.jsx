import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home.jsx";
import Skill from "../src/pages/skills.jsx";
import Layout from "./components/layout.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index Component={Home}></Route>
          <Route path="/skills" element={<Skill />}></Route>
          <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
