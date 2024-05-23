import { useState, useEffect } from 'react';

const localCache = {

}

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    useEffect(() => {
      getFetch();
    
    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        });
    };

    const getFetch = async() => {

        if(localCache[url]){
            console.log('Datos desde caché');
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            });
            return;
        }

        setLoadingState();//cada vez que cambia la url se vuelve a cargar el estado
        const resp = await fetch(url);
        
        //sleep
        await new Promise(resolve => setTimeout(resolve, 1500));        

        if(!resp.ok){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: resp.statusText,
            });

            return;
        }
        
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: false,
            error: null,
        });

        //manejo del caché
        localCache[url] = data;
    }
    

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
