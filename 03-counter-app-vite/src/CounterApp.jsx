import PropTypes from 'prop-types';
import { useState } from 'react'; //hook de react

export const CounterApp = ({value}) => {
    
    const [counter, setCounter] = useState(value); //hook de react


    const handleAdd = () =>{ //funcion que se ejecuta al hacer click
        //console.log(event);
        setCounter (counter + 1); //cambia el valor de counter
    }

    const handleSub = () =>{ //funcion que se ejecuta al hacer click
        setCounter (counter - 1); //cambia el valor de counter
    }

    const handleReset = () =>{ //funcion que se ejecuta al hacer click
        setCounter(value); //cambia el valor de counter
    }


    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={handleAdd}>
            +1
        </button>

        <button onClick={handleSub}>
            -1
        </button>

        <button onClick={handleReset}>
            Reset
        </button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
