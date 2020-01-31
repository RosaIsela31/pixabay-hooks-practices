import React from 'react';
import Formulario from './Formulario';

const Container = () => {
  return ( 
    <div className='container'>
      <div className='jumbotron'>
        <p className='lead text-center'>Buscador de imágenes</p>
        <Formulario />
      </div>
    </div>
   );
}
 
export default Container;