import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Componentes y Vistas
import Menu from "./components/Menu";
import Inicio from "./pages/Inicio";
import Proyectos from "./pages/Proyectos";
import SobreMi from "./pages/SobreMi";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <main className="portafolio">
      <BrowserRouter>
        {/* Navegación global */}
        <Menu />

        {/* Definición de rutas */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/SobreMi" element={<SobreMi />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;