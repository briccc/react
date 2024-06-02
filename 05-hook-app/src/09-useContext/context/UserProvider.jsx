//higher order component se diferencia de un componente normal en que en las props recibe un componente hijo y retorna un componente padre
import { useState } from 'react';
import { UserContext } from "./UserContext";

const user = {
  id: 1234,
  name: "Bric",
  email: "bricgmail.com",
};

export const UserProvider = ({ children }) => {
  
    const [user, setUser] = useState();

  return (
    //quiero proveer la info que proporciona el UserContext
    //<UserContext.Provider value={{hola:'mundo', user: user}}>
    <UserContext.Provider value={{user , setUser}}> {/*generalmente no se manda el setUser porque sa demasiado control*/}
      {children}
    </UserContext.Provider>
    //generalmente se regresa un objeto con toda la info del usuario
  );
};
