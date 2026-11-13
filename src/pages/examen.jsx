import React, { useState } from 'react';
import './Contacto.css';
import emailjs from '@emailjs/browser';

function Contacto() {
  // Estado para gestionar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    motivo: 'consulta',
    mensaje: '',
    terminos: false
  });

  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Comunidad+Vitiche+Tartagal+Salta";

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Integración de tus credenciales reales de EmailJS
    emailjs.sendForm('service_1tx0ni3', 'template_r8zjo9q', e.target, 'M_ONwDWQoktySeDT7')
      .then((result) => {
        console.log('Datos enviados:', formData);
        alert('¡Formulario enviado con éxito!');

        // Limpia los campos del formulario tras el envío exitoso
        setFormData({
          nombre: '',
          email: '',
          motivo: 'consulta',
          mensaje: '',
          terminos: false
        });
      }, (error) => {
        console.error('Error al enviar el formulario:', error);
        alert('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      
      {/* Sección de datos de contacto */}
      <div className="contacto-info">
        <p><strong>Dirección:</strong> Comunidad Vitiche S/N, Av. Andino, Tartagal – Salta</p>
        <p><strong>Correo:</strong> mariadanielape27@gmail.com</p>
        <p><strong>Teléfono:</strong> +54 38736 644649</p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a 
            href="https://linkedin.com/in/maria-daniela-perez-841a58382" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            linkedin.com/in/maria-daniela-perez-841a58382
          </a>
        </p>

        <a 
          href={mapUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-mapa"
        >
          Buscar en Google Maps
        </a>
      </div>

      <hr className="divider" />

      {/* Sección del formulario */}
      <h2>Envíame un mensaje</h2>
      <form onSubmit={handleSubmit} className="contacto-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej: María Pérez"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="motivo">Motivo:</label>
          <select
            id="motivo"
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
          >
            <option value="consulta">Consulta general</option>
            <option value="presupuesto">Presupuesto</option>
            <option value="soporte">Soporte</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
            required
          />
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="terminos"
              checked={formData.terminos}
              onChange={handleChange}
              required
            />
            Acepto los términos y condiciones
          </label>
        </div>

        <button type="submit" className="btn">Enviar Formulario</button>
      </form>
    </div>
  );
}

export default Contacto;