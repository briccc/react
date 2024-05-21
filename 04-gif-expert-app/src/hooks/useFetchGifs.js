import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages); 
        setIsLoading(false); //ya cargó
    }

    useEffect(() => {
        getImages();
    }, []);
    //como si fuera un function component

    return {
        images, //images: images
        isLoading, //isLoading: isLoading
    } //esto es un custom hook
}
