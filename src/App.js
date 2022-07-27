import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import First from "./components/First";
import Second from "./components/Second";
import Useformik from "./components/Useformik";
import Validation from "./components/Validation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <li>
            <NavLink to="/">First</NavLink>
          </li>
          <li>
            <NavLink to="/second">Second</NavLink>
          </li>
          <li>
            <NavLink to="/useformik">UseFormik</NavLink>
          </li>
          <li>
            <NavLink to="/validation">Validation</NavLink>
          </li>
        </nav>

        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/useformik" element={<Useformik />} />
          <Route path="/validation" element={<Validation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
