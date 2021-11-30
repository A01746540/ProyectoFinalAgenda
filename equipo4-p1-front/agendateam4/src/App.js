import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useEffect } from 'react'
import { useState } from 'react';
import './registro.css';

import Tareas from './tareas';
import './estilos.css'

export default function App() {
  return (
    <div>

      <div className="Header">
        <h1>¡Bienvenidos!</h1>

        <p> Bienvenido a tu nueva Agenda. Solo registrate y comienza el registro de tus tareas pendientes.<br></br>
        Puedes agregar tus tareas en cualquier momento, solo debes iniciar sesión.
        A continuación, puedes ver tus tareas pendientes.
        Asi mismo, puedes editar, eliminar o agregar tus tareas pendientes.
        </p>
      </div>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard2" element={<Dashboard2 />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className="MenuNav">
        <ul className="lista">

          <li>
            <Link to="/dashboard">Registro de usuarios</Link>
          </li>

          <li>
            <Link to="/dashboard2">Mostrar usuarios</Link>
          </li>
          
          <li>
            <Link to="/">Registro de tareas</Link>
          </li>
          <li>
            <Link to="/about">Mi lista de Tareas</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  const [state, setState] = useState({
    identificador: '',
    categoria: '',
    titulo: '',
    descripcion: '',
    fecha_creacion: '',
    fecha_inicio: '',
    fecha_termino: ''
})

const nuevaTarea = async () => {
    console.log(state)
    const respuesta = await fetch('http://localhost:8084/AgendaTask/agregarTarea', {
        //AQUI VA LA DIRECCIÓN DEL METODO AGREGAR ALUMNO
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // credentials: 'include',
        body: JSON.stringify({
            ...state,
        }),
    })
      const data = await respuesta.json()
      console.log(data)
}

return (
    <div className="registrar">
        <div className="row inicioSes ajuste">
            <form onSubmit={(e) => e.preventDefault()}>
                <h2 id="inicio">NUEVA TAREA</h2>
                <div className="row mb-4">
                    <div className="col-sm-12">
                        <input
                            type="text"
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    titulo: e.target.value,
                                })
                            }
                            className="form-control formatoIn"
                            id="titulo"
                            name="titulo"
                            placeholder="Titulo de la actividad"
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-sm-12">
                        <input
                            type="text"
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    descripcion: e.target.value,
                                })
                            }
                            className="form-control formatoIn"
                            id="descripcion"
                            name="descripcion"
                            placeholder="Descripción de la actividad"
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-sm-12">
                        <input
                            type="text"
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    categoria: e.target.value,
                                })
                            }
                            className="form-control formatoIn"
                            id="categoria"
                            name="categoria"
                            placeholder="Categoria"
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-sm-12">
                        <input
                            type="text"
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    fecha_creacion: e.target.value,
                                })
                            }
                            className="form-control formatoIn"
                            id="fecha_creacion"
                            name="fecha_creacion"
                            placeholder="Fecha de creación"
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-sm-12">
                        <input
                            type="text"
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    fecha_inicio: e.target.value,
                                })
                            }
                            className="form-control formatoIn"
                            id="fecha_inicio"
                            name="fecha_inicio"
                            placeholder="Fecha de inicio"
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-sm-12">
                        <input
                            type="text"
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    fecha_termino: e.target.value,
                                })
                            }
                            className="form-control formatoIn"
                            id="fecha_termino"
                            name="fecha_termino"
                            placeholder="Fecha de termino"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    onClick={nuevaTarea}
                    className="btn btn-primary">
                    Agregar Tarea
                </button>
            </form>
            {/* <p>{usuarios}</p> */}
        </div>
    </div>
)
}

function About() {
  return (
    <Tareas />
  );
}

function Dashboard() {
  const [state, setState] = useState({
    fullname: '',
    username: '',
    mail: '',
    password: '',
    contraseñaRepetir: '',
})

const nuevoAlumno = async () => {
    console.log(state)
    const respuesta = await fetch('http://localhost:8084/AgendaUser/agregarUsuario', {
        //AQUI VA LA DIRECCIÓN DEL METODO AGREGAR ALUMNO
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // credentials: 'include',
        body: JSON.stringify({
            ...state,
        }),
    })
      const data = await respuesta.json()
      console.log(data)
}

return (
    <div className="registrar">
        <div className="row inicioSes ajuste">
            <form onSubmit={(e) => e.preventDefault()}>
                <h2 id="inicio">REGISTRARME</h2>
                <div className="row mb-4">
                    <div className="col-sm-12">
                        <input
                            type="text"
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    fullname: e.target.value,
                                })
                            }
                            className="form-control formatoIn"
                            id="fullname"
                            name="fullname"
                            placeholder="Nombre(s)"
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-sm-12">
                        <input
                            type="text"
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    username: e.target.value,
                                })
                            }
                            className="form-control formatoIn"
                            id="username"
                            name="username"
                            placeholder="Nombre usuario"
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-sm-12">
                        <input
                            type="email"
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    mail: e.target.value,
                                })
                            }
                            className="form-control formatoIn"
                            id="mail"
                            name="mail"
                            placeholder="Correo electrónico"
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-sm-12">
                        <input
                            type="password"
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    password: e.target.value,
                                })
                            }
                            className="form-control formatoIn"
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                        />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-sm-12">
                        <input
                            type="password"
                            onChange={(e) =>
                                setState({
                                    ...state,
                                    contraseñaRepetir: e.target.value,
                                })
                            }
                            className="form-control formatoIn"
                            id="contraseñaRepetir"
                            name="contraseñaRepetir"
                            placeholder="Repite tu contraseña"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    onClick={nuevoAlumno}
                    className="btn btn-primary">
                    Registrarme
                </button>
            </form>
            {/* <p>{usuarios}</p> */}
        </div>
    </div>
)
}

function Dashboard2() {
  const [usuarios, setUsuarios] = useState([])
    useEffect(() => {
      fetch('http://localhost:8084/AgendaUser/listarUsuarios')
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.log(err))
    }, [])
    return (
      <div className="registrar">
        <div className="row inicioSes ajuste">
          <h2 id="inicio">USUARIOS</h2>
          <ul>
            
          <article id="post">
            {usuarios.map(usuario => (
              <li key={usuario.id}>
                
                <div id="tituloFondo">
                {usuario.fullname}<br/>
                </div>
                
                <div id="descrip">
                {usuario.username}<br/>
                {usuario.mail}<br/>
                </div>

              </li>
            ))}
            
            </article>
          </ul>
        </div>
      </div>
    )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
