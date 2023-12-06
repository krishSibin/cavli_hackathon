import { createContext, useState } from "react";

export const NameContext = createContext(null);


export default function Name({children}){
    const [proSearch, setproSearch] = useState("");

    return(
        <NameContext.Provider value={{proSearch, setproSearch}}>
          {children}
        </NameContext.Provider>
    )
}