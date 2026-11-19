
import { Link } from "react-router-dom";

export default function Ejemplo1() {

  return (
    <section>
      <div className="texto" style={{ maxWidth: "500px" }}>

        <h1 style={{ margin: "0 0 10px 0", fontSize: "2rem" }}>
          Hola, soy María Daniela Perez
        </h1>

        <h2 style={{
          margin: "0 0 15px 0",
          fontSize: "1.25rem",
          fontWeight: "600"
        }}>
          Analista de Sistemas y Programación con orientación
          en Desarrollo de Aplicaciones
        </h2>

        <p style={{ margin: "0 0 20px 0", lineHeight: "1.6" }}>
          Soy Analista de Sistemas junior y estudiante de
          Tecnicatura en Programación con orientación en
          Desarrollo de Aplicaciones. Tengo conocimientos
          en el desarrollo de sistemas de gestión con SQLite,
          MySQL Server y otras tecnologías.
        </p>

        <Link to="/SobreMi" className="btn">
          Ver más
        </Link>

      </div>
    </section>
  );
}
