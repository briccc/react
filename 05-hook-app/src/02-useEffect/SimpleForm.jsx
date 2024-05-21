import { useState, useEffect } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  
    const [formState, setFormState] = useState({
        username: 'bric',
        email: 'bric@gmail.com',
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState({
            ...formState,
            [name]: value
        });
    }
  
    //efecto por cada accion, mejor tenerlos separados

    // useEffect (() => {
    //     console.log('useEffect');
    // }, []); //debería tener dependencias, cuado es [] se ejecuta una sola vez

    //efecto por cada cambio en el formulario
    // useEffect (() => {
    //     console.log('formState cambió');
    // }, [formState]);

    //efecto por cada cambio en el email
    // useEffect (() => {
    //     console.log('email cambió');
    // }, [email]);

    return (
    <>
        <h1>Formulario Simple</h1>

        <hr />

        <input type="text" 
        className="form-control" 
        placeholder="Username" 
        name="username" 
        value={username}
        onChange={onInputChange}
        />

        <input type="email" 
        className="form-control mt-2" 
        placeholder="bric@gmail.com" 
        name="email" 
        value={email}
        onChange={onInputChange}
        />


        {
            (username ==='bric') && <Message/>
        }
    </>
  )
}
