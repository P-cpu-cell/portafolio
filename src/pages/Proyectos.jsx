import React from 'react';
import './Proyectos.css'; 
function Proyectos() {

  const listaProyectos = [
    {
      id: 1,
      titulo: 'Taller de Motos',
      image:"/tallermoto.png",
      descripcion: 'Sistema de gestion que administra y registra los servicio  de un Taller de Motos, permitiendo un control eficiente de clientes, vehículos y servicios realizados.',
      tecnologias: ['C#(utilizando el entorno .NET Framework / Windows Forms)'],
      linkCodigo: 'https://github.com/P-cpu-cell/Taller_de_Moto'
    },
    {
      id: 2,
      titulo: 'GALERIA Profecional :" Recuerdos para ti"',
      image:"/galeria.png",
      descripcion: 'El proyecto consiste en un sistema de galería visual que despliega un catálogo organizado de imágenes centradas en temáticas como naturaleza, paisajes y comida. La aplicación permite visualizar las fotografías junto con información clave y descripciones breves, ofreciendo una navegación intuitiva para explorar el contenido multimedia.',
      tecnologias: ['WordPress', 'HTML', 'CSS', 'JavaScript'],

      linkCodigo: 'https://github.com/P-cpu-cell/galeria/tree/master/OneDrive/Documentos/proyecto/galeria'
    },
    {
      id: 3,
      titulo: 'El sitio web  Astroletra Escuela de Escritura',
      image: "/escuela.png",
      descripcion: 'Es una plataforma web e interactiva orientada al ámbito educativo y creativo de la escritura.Su objetivo es Ofrecer un espacio formativo enfocado en técnicas de escritura, cursos, recursos literarios y orientación académica o artística.',
      tecnologias: ['HTML5', 'CSS3', 'JavaScript'],
    
      linkCodigo: 'https://github.com/P-cpu-cell/galeria/tree/master/OneDrive/Documentos/proyecto/Astro%20letra%20Escuela%20de%20Escritura'
    },
    {
      id: 4,
      titulo: 'Sistema de Gestión  para una Sala de belleza',
      image: "/estetica.png",
      descripcion: 'Sistema de gestión para la administración de servicios y clientes en una sala de belleza, permitiendo un control eficiente de citas, productos y servicios.',
      tecnologias: ['C#', 'Sqlite', 'Windows Forms'],
      linkCodigo:'https://github.com/P-cpu-cell/Sistema-de-Gesti-n-para-una-Sala-de-belleza'  
    }
  ];

  return (
    <section className="proyectos-seccion">
      <h1 className="proyectos-titulo">Mis Proyectos</h1>
      
      <div className="proyectos-grid">
        {listaProyectos.map((proyecto) => (
          <div className="tarjeta-proyecto" key={proyecto.id}>
            <div className="tarjeta-contenido">
              <h3>{proyecto.titulo}</h3>
              <div className="tarjeta-imagen-contenedor">
                <img src={proyecto.image} alt={proyecto.titulo} className="tarjeta-imagen" />
              </div>
              <p>{proyecto.descripcion}</p>
              
            
              <div className="tecnologias">
                {proyecto.tecnologias.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

       
            <div className="tarjeta-acciones">
             
              <a 
                href={proyecto.linkCodigo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-proyecto btn-secundario"
              >
                Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;