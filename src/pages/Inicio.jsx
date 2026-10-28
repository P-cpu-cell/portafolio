import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Inicio() {
  const [personaje, setPersonaje] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const idAleatorio = Math.floor(Math.random() * 826) + 1;

    fetch(`https://rickandmortyapi.com/api/character/${idAleatorio}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener datos de la API");
        }
        return res.json();
      })
      .then((data) => {
        setPersonaje(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  return (
    <div 
      className="inicio-container" 
      style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "center", 
        alignItems: "center", 
        gap: "40px", 
        padding: "40px 20px", 
        maxWidth: "1200px", 
        margin: "0 auto" 
      }}
    >
      {/* 1. Sección de Presentación Personal */}
      <section 
        className="presentacion" 
        style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          alignItems: "center", 
          justifyContent: "center", 
          gap: "30px", 
          flex: "1 1 600px" 
        }}
      >
        <div className="foto" style={{ flexShrink: 0 }}>
          <img 
            src="/logo.jpg" 
            alt="María Daniela Perez" 
            style={{ 
              width: "220px", 
              height: "220px", 
              borderRadius: "50%", 
              objectFit: "cover" 
            }} 
          />
        </div>

        <div className="texto" style={{ maxWidth: "500px" }}>
          <h1 style={{ margin: "0 0 10px 0", fontSize: "2rem" }}>Hola, soy María Daniela Perez</h1>

          <h2 style={{ margin: "0 0 15px 0", fontSize: "1.25rem", fontWeight: "600" }}>
            Analista de Sistemas y Programación con orientación en Desarrollo de Aplicaciones
          </h2>

          <p style={{ margin: "0 0 20px 0", lineHeight: "1.6" }}>
            Soy Analista de Sistemas junior y estudiante de Tecnicatura en Programación 
            con orientación en Desarrollo de Aplicaciones. Tengo conocimientos en el
            desarrollo de sistemas de gestión con SQLite, MySQL Server y otras tecnologías.
          </p>

          <Link to="/SobreMi" className="btn">
            Ver más
          </Link>
        </div>
      </section>

    
    </div>
  );
}

export default Inicio;