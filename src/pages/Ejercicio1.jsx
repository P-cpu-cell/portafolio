

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./Ejercicio1.css";

function Ejercicio1() {

    const [formulario, setFormulario] = useState("login");
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [mostrarConfirmar, setMostrarConfirmar] = useState(false);

    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState("");

    // Cambiar entre Login y Registro
    const mostrarLogin = () => {
        setFormulario("login");
    };

    const mostrarRegistro = () => {
        setFormulario("registro");
    };

    // Animación con GSAP
    useEffect(() => {
        gsap.from(".contenedor", {
            opacity: 0,
            scale: 0.8,
            duration: 1
        });
    }, []);

    // Validar inicio de sesión
    const iniciarSesion = (e) => {
        e.preventDefault();

        alert("Inicio de sesión de ejemplo");
    };

    // Validar registro
    const registrarUsuario = (e) => {
        e.preventDefault();

        if (password !== confirmarPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        alert("Registro validado correctamente");
    };

    return (

        <div className="contenedor">

            <div className="formulario">
                 <div className="logo">
        <img src="/logo.png" alt="Logo de usuario" />
    </div>

                <div className="botones">

                    <button onClick={mostrarLogin}>
                        Iniciar sesión
                    </button>

                    <button onClick={mostrarRegistro}>
                        Registrarse
                    </button>

                </div>

                {/* FORMULARIO LOGIN */}

                {formulario === "login" && (

                    <form onSubmit={iniciarSesion}>

                        <h2>Bienvenido</h2>

                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            required
                        />

                        <div className="password">

                            <input
                                type={mostrarPassword ? "text" : "password"}
                                placeholder="Contraseña"
                                required
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setMostrarPassword(!mostrarPassword)
                                }
                            >
                                {mostrarPassword ? "Ocultar" : "Mostrar"}
                            </button>

                        </div>

                        <label>
                            <input type="checkbox" />
                            Recordarme
                        </label>

                        <button type="submit" className="principal">
                            Iniciar sesión
                        </button>

                        <p>
                            ¿No tienes cuenta?
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                mostrarRegistro();
                            }}>
                                Registrarse
                            </a>
                        </p>

                    </form>

                )}

                {/* FORMULARIO REGISTRO */}

                {formulario === "registro" && (

                    <form onSubmit={registrarUsuario}>

                        <h2>Crear cuenta</h2>

                        <input
                            type="text"
                            placeholder="Nombre completo"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            required
                        />

                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <div className="password">

                            <input
                                type={mostrarConfirmar ? "text" : "password"}
                                placeholder="Confirmar contraseña"
                                value={confirmarPassword}
                                onChange={(e) =>
                                    setConfirmarPassword(e.target.value)
                                }
                                required
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setMostrarConfirmar(!mostrarConfirmar)
                                }
                            >
                                {mostrarConfirmar ? "Ocultar" : "Mostrar"}
                            </button>

                        </div>

                        <button type="submit" className="principal">
                            Crear cuenta
                        </button>

                        <p>
                            ¿Ya tienes cuenta?
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                mostrarLogin();
                            }}>
                                Iniciar sesión
                            </a>
                        </p>

                    </form>

                )}

            </div>

        </div>

    );
}

export default Ejercicio1;
