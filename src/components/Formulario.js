import React, {  useState } from 'react';
import Error from './Error';

const Formulario = () => {
 
  const [ termino,  guardarTermino ] = useState('');
  const [ error, guardarError ] = useState(false); 

  const buscarImagenes = e => {
    e.preventDefault();

    // Validar
    if(termino.trim() === ''){
        guardarError(true)
        return;
    }

    guardarError(false)

    // Enviar el termino de búsqueda hacia el componente principal
  }

  return ( 
    <form
      onSubmit={buscarImagenes}
    >
      <div className='row'>
        <div className='form-group col-md-8'>
            <input 
                type='text'
                className='form-control form-control-lg'
                placeholder='Busca una imágen, ejemplo: app, café, futbol'
                onChange={e => guardarTermino(e.target.value)}
            />
        </div>
        <div className='form-group col-md-4'>
            <input 
                type='submit'
                className='btn btn-lg btn-danger btn-block'
                placeholder='Busca una imágen, ejemplo: app, café, futbol'
                value='Buscar'
            />
        </div>
      </div>
      {error ? <Error mensaje='Agrega un término de búsqueda' /> : null}
    </form>
   );
}
 
export default Formulario;