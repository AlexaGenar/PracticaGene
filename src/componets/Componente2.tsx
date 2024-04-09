import React, { useState } from 'react'

const Componente2 = ()  => {
 
const [counter, setCounter] = useState(0)

const changesAnimal = () =>{
  setCounter (counter + 1);
}

  return (
    <>
    <h2>{counter}</h2>

    <button type='button' onClick={changesAnimal}>Cambiar</button>
  
    </>
  )
}

export default Componente2