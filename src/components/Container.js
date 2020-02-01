import React, { useState, useEffect } from 'react';
import Formulario from './Formulario';
import ListadoImagenes from './ListadoImagenes';

const Container = () => {

   // State de la app
   const [ busqueda, guardarBusqueda ] = useState(''); 
   const [ imagenes, guardarImagenes ] = useState([]);
   const [ paginaactual, guardarPaginaActual ] = useState(1);
   const [ totalPaginas, guardarTotalPaginas ]  = useState(1); 

   useEffect(() => {
     const consultarAPI = async () => {

      if(busqueda === '') return;

      const imagenesPorPagina = 30;
      const key =  '15100229-4a3577dcf7dc0babcd57cba53';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual }`;
 
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);

      // Calcular el total de páginas

      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina)
      guardarTotalPaginas(calcularTotalPaginas)

      // Mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'})
     }
     
     consultarAPI();

   }, [busqueda, paginaactual])

   // Definir la función para ir a la página anterior 

   const paginaAnterior = () => {
     const nuevaPaginaActual =  paginaactual - 1;

     if(nuevaPaginaActual === 0) return;

     guardarPaginaActual(nuevaPaginaActual);
   }; 

   const paginaSiguiente = () => {
    const nuevaPaginaActual =  paginaactual + 1;

    if(nuevaPaginaActual > totalPaginas) return;

    guardarPaginaActual(nuevaPaginaActual);
   }

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
      
      {(paginaactual === 1) 
      ? 
          null 
      :   
          (<button
              type='button'
              className='bbtn btn-info mr-1'
              onClick={paginaAnterior}
          >&laquo;Anterior </button>)}

        {(paginaactual === totalPaginas)
        ?
          null
        :
          (<button
              type='button'
              className='bbtn btn-info'
              onClick={paginaSiguiente}
          >Siguiente &raquo;</button>)
        }

        
      </div>
    </div>
   );
}
 
export default Container;