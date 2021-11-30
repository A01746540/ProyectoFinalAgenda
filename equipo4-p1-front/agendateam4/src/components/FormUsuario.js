import React from 'react';
import { useState } from 'react'
import './registro.css'

function FormUsuario() {
    const [state, setState] = useState({
      nombre: '',
      apellidoP: '',
      apellidoM: '',
      email: '',
      contraseña: '',
      contraseñaRepetir: '',
  })
  
  const nuevoAlumno = async () => {
      const respuesta = await fetch('http://', {
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
                                      nombre: e.target.value,
                                  })
                              }
                              className="form-control formatoIn"
                              id="nombre"
                              name="nombre"
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
                                      apellidoP: e.target.value,
                                  })
                              }
                              className="form-control formatoIn"
                              id="apellidoP"
                              name="apellidoP"
                              placeholder="Apellido Paterno"
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
                                      apellidoM: e.target.value,
                                  })
                              }
                              className="form-control formatoIn"
                              id="apellidoM"
                              name="apellidoM"
                              placeholder="Apellido Materno"
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
                                      email: e.target.value,
                                  })
                              }
                              className="form-control formatoIn"
                              id="email"
                              name="email"
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
                                      contraseña: e.target.value,
                                  })
                              }
                              className="form-control formatoIn"
                              id="contraseña"
                              name="contraseña"
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

  export default FormUsuario;