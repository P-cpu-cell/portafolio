import React, { useState } from 'react';
import './ejemplo1.css';

function Ejemplo1() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  }); 