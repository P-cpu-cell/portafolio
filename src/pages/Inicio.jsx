import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Inicio() {
  const [climaData, setClimaData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mensajeError, setMensajeError] = useState(null);

  useEffect(() => {
    // API gratuita de Open-Meteo para Tartagal, Salta (Latitud y Longitud, sin necesidad de Key)
    fetch("https://api.open-meteo.com/v1/forecast?latitude=-22.5167&current_weather=true&longitude=-63.8")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("Error al obtener datos del clima");
        }
        return respuesta.json();
      })
      .then((resultado) => {
        setClimaData(resultado.current_weather);
        setIsLoading(false);
      })
      .catch((err) => {
        setMensajeError(err.message);
        setIsLoading(false);
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

      <aside className="seccion-api" style={{ flexShrink: 0 }}>
        <h3 style={{ textAlign: "center", marginBottom: "15px", fontSize: "1rem" }}>
          Clima Actual en la Zona
        </h3>

        {isLoading && <p style={{ textAlign: "center" }}>Cargando clima...</p>}
        {mensajeError && <p style={{ color: "red", textAlign: "center" }}>Error: {mensajeError}</p>}

        {climaData && (
          <div 
            className="card-api" 
            style={{ 
              border: "1px solid #e0e0e0", 
              padding: "20px", 
              borderRadius: "12px", 
              width: "240px", 
              backgroundColor: "#ffffff", 
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              textAlign: "center"
            }}
          >
            <h4 style={{ margin: "0 0 10px 0", fontSize: "1.1rem" }}>Tartagal, Salta</h4>
            <p style={{ margin: "8px 0", fontSize: "1.8rem", fontWeight: "bold", color: "#007bff" }}>
              {climaData.temperature}°C
            </p>
            <p style={{ margin: "4px 0", fontSize: "0.9rem" }}><strong>Viento:</strong> {climaData.windspeed} km/h</p>
            <p style={{ margin: "4px 0", fontSize: "0.9rem" }}><strong>Estado:</strong> En línea</p>
          </div>
        )}
      </aside>
    </div>
  );
}