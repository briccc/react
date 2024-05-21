import { useState, useEffect } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0}	);

    useEffect(() => {

        const onMouseMove = ({x, y}) => {
            setCoords({x, y});
        }; //espacio de memoria

        window.addEventListener('mousemove', onMouseMove); //si hago la funcion dentro del addEventListener, se crea una nueva funcion cada vez que se mueve el mouse

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
        }, []);
    
    return (
    <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(coords)}
    </>
  )
}
