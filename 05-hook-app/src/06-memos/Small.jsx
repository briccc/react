import React from 'react';


export const Small = React.memo(({value}) => {
    console.log('Small component called');
  return (
    <small>{value}</small>
  )
})//sirve para que el componente no se vuelva a generar (se memoriza)
