import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <main className="portafolio">
      <nav className="menu">
        <Link to="/Inicio">Inicio</Link>
        <Link to="/SobreMi">SobreMi</Link>
        <Link to="/Proyectos">Proyectos</Link>
        <Link to="/Contacto">Contacto</Link>
        <Link to="/Ejercicio1">Ejercicio 1</Link>

      </nav>
    </main>
  );
}

export default Menu;