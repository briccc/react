import { useRef } from 'react';

export const FocusScreen = () => {
    const inputRef = useRef(); //useRef() es un hook que nos permite mantener una referencia mutable a un elemento del DOM
    console.log(inputRef);


    const onClick = () => {
        inputRef.current.select();

    }

    return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input type="text" 
        ref={inputRef}
        placeholder="Ingrese nombre" 
        className="form-control"/>
    
        <button className="btn btn-primary mt-2"
        onClick={onClick}
        >Set Focus
        </button>
    
    
    </>
  )
}
