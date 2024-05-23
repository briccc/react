import { useLayoutEffect, useRef, useState } from 'react';

export const PokemonCard = ({id, name, sprites = [] }) => {
  
  const divRef = useRef();

  const [boxSize, setBoxSize] = useState({width:0, height: 0})
  
  useLayoutEffect(() => {
    const {height,width} = divRef.current.getBoundingClientRect();
    setBoxSize({width, height});
  }, [sprites]);
  
  return (
    <>
    <section style={{height:200, display:'flex'}} >
        <h2 className="text-capitalize"># {id}-{name}</h2>

        
        <div ref={divRef}>
        {
            sprites.map(sprite => (
                <img key={sprite} src={sprite} alt={name} style={{width: 100}} />
            ))
        }
        </div>
        
    </section>
    <code>
            <pre>
                {JSON.stringify(boxSize)}
            </pre>
        </code>
    </>
  )
}
