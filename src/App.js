import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/AdminPage";
import ProdutosPage from "./components/ProdutosPage";
import RelatoriosPage from "./components/RelatoriosPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/produtos" element={<ProdutosPage />} />
          <Route path="/relatorios" element={<RelatoriosPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
