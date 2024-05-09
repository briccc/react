import {useState} from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChanged = ({target}) => {
    setInputValue(target.value); // target.value es el valor del input
  }


  const onSubmit = (event) => {
    event.preventDefault(); // evita que se recargue la página
    if(inputValue.trim().length <= 1) return; // si el valor del input es menor o igual a 1, no hace nada

    //setCategories(categories => [...categories, inputValue]);
    onNewCategory(inputValue.trim());
    setInputValue(''); // limpia el input
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>

      <input type="text" 
        placeholder="Buscar categoria" 
        value={inputValue} 
        onChange={onInputChanged} // evento que se dispara cuando cambia el valor del input
      />
    </form>
  );
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
