import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import axios from "axios";

import LoginPage from "./Pages/LoginPage";

axios.defaults.baseURL = "http://localhost:5000";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
