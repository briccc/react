import { useCounter, useFetch } from '../hooks';
import { LoadingMessage } from '../03-examples/LoadingMessage';
import { PokemonCard } from '../03-examples/PokemonCard';

export const Layout = () => {
  //useLayoutEffect() es un hook que nos permite ejecutar un efecto de manera sincrónica, es decir, 
  //antes de que se pinte el componente en el DOM
  const {counter, decrement, increment} = useCounter(1);

  const { isLoading, data, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Información de Pokemon</h1>

      <hr />

      { isLoading
        ? <LoadingMessage />
        : (<PokemonCard 
            id={counter} 
            name={data.name}
            sprites={[
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_default,
              data.sprites.back_shiny,
            ]} />
          )
      }


      <button onClick={()=> counter > 1 ? decrement() : null} className='btn btn-primary mt-2'>
        Anterior
      </button>
      <button onClick={()=>increment()} className='btn btn-primary mt-2 '>
        Siguiente
      </button>
      
    </>
  )
}
