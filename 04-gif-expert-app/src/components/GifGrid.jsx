//import { useState, useEffect } from "react";
//import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category); // custom hook que retorna las imágenes y un booleano que indica si está cargando o no

    return (
        <>
            <h3>{category}</h3>

            {/* si isLoading es true, muestra el mensaje de cargando*/}
            {isLoading && <p>Cargando...</p>} 

            <div className='card-grid'>
                {
                    images.map((image) => (
                    <GifItem 
                        key={image.id} 
                        {...image}
                    />
                ))
                }
           </div>
           
        </>
  )
}
