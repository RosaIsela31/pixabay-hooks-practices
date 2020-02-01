import React, { useState, useEffect } from 'react';
import Formulario from './Formulario';
import ListadoImagenes from './ListadoImagenes';

const Container = () => {

   // State de la app
   const [ busqueda, guardarBusqueda ] = useState(''); 
   const [ imagenes, guardarImagenes ] = useState([]);

   useEffect(() => {
     const consultarAPI = async () => {

      if(busqueda === '') return;

      const imagenesPorPagina = 30;
      const key =  '15100229-4a3577dcf7dc0babcd57cba53';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;
 
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);
      
     }
     
     consultarAPI();

   }, [busqueda])

  return ( 
    <div className='container'>
      <div className='jumbotron'>
        <p className='lead text-center'>Buscador de imágenes</p>
        <Formulario 
          guardarBusqueda={guardarBusqueda}
        />
      </div>
      <div className='row justify-content-center'>
        <ListadoImagenes 
          imagenes={imagenes}
        /> 
      </div>
    </div>
   );
}
 
export default Container;