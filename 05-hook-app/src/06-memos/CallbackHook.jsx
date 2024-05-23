import React, { useState, useCallback, useEffect } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  
  const [counter, setCounter] = useState(10);
  
  // const incrementFather = () => {
  //   setCounter(counter + 1);
  // }

  const incrementFather =  useCallback(
    (value) => {
      setCounter((c) => c + value );
    },
    [],
  )// sirve para que la función no se vuelva a generar (se memoriza), a diferencia de React.memo que sirve para que el componente no se vuelva a generar
  
  // useEffect(() => {
  //   //incrementFather();
  // }, [íncrementFather]); //otra forma de usar useCallback es pasando la función como dependencia del useEffect
  
  return (
    <>
    <h1>CallbackHook: {counter}</h1>

    <hr />  

    <ShowIncrement increment={incrementFather}/>
    
    </>
  )
}
