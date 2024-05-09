import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['barbie']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return; //valida si la categoria ya existe
    //console.log(newCategory);
    setCategories([...categories, newCategory]);
  }

  return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={event => onAddCategory(event)}/>

          {categories.map((category) => 
            (
              <GifGrid key={category} category={category}/>
          ))}

    </>

  )
}

