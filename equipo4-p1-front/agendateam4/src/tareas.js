import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './tareas.css'

function Tareas() {

    const [tareas, setTareas] = useState([])
    useEffect(() => {
      fetch('http://localhost:8084/AgendaTask/listarTareas')
      .then(res => res.json())
      .then(data => setTareas(data))
      .catch(err => console.log(err))
    }, [])

    return (
        <div className="tareas">
            <div class="container-fluid banner">
                <div class="row">
                    <div class="col">
                        <h1 id="textoTitulo">Tienes varias tareas por realizar...</h1>
                    </div>
                </div>
            </div>

            <div class="container-fluid tareasBannerDos">
                <div class="row">
                    <div class="col buffer">
                        
                        {tareas.map((publicacion) => (
                                <article id="post">
                                <div id="tituloFondo">
                                    <h1>{publicacion.titulo}</h1>
                                    <p>{publicacion.categoria}</p>
                                </div>
    
                                <div id="descrip">
                                    <p>{publicacion.descripcion}</p>
                                </div>
                                </article>
                                
                        ))}

                        {/*<article id="post">
                            <div id="tituloFondo">
                                <h1>Tarea</h1>
                                <p>Descripción de tu tarea</p>
                            </div>

                            <div id="descrip">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Nam sodales massa id justo tincidunt, vitae commodo odio lacinia. 
                                    In hac habitasse platea dictumst. Cras placerat dolor sed posuere vulputate.</p>
                            </div>
                        </article>*/}
 
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tareas
