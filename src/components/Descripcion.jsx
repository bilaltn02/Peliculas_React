import React, {useEffect, useState} from 'react';
import { useParams, Link } from "react-router-dom";
import {getPelicula} from '../services/datos.js';
import useDescripcion from '../hooks/useDescripcion';


const Descripcion = () => {
    const params = useParams();
    const param = params.id;
    const [pelicula] = useDescripcion(parseInt(param));
   
  //  const peli = getPelicula(1);

  return (
    <div>
        {console.log(pelicula)}
      <div className='container_des'>
        <div className='container_img'>
        <img src={pelicula.poster} className="img"/>
        </div>
        <div className='textos'>
          <p className="linea"><span className='linea_title'>Título: </span> {pelicula.title}</p>
          <p className="linea"><span className='linea_title'>Fecha: </span> {pelicula.date}</p>
          <p className="linea"><span className='linea_title'>Puntuación: </span> {pelicula.vote_count}</p>
          <p className="linea"><span className='linea_title'>Puntuación Media:</span> {pelicula.vote_average} </p>
          <p className="linea"><span className='linea_title'>Resumen: </span></p>
          <p className="linea">{pelicula.overview} </p>
        </div>
        
        <div className='container_boton'>
        <Link to="/" key={pelicula.id} className="boton">Volver</Link>
        </div>
      </div>
      

    </div>
  )
}

export default Descripcion