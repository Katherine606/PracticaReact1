import { useState } from "react";

const listaNombres = ["Diego", "Kathe", "Paola", "Dalo"];


const FiltroInput = () => {
     const [name, setName] = useState("");
    
   
    
     return(
        <>
        <div>
          <h1>Nombres</h1>
            <ul>
            {listaNombres.filter((nombre) => nombre.toLowerCase().includes(name.toLowerCase()))
                .map((nombre, index) => (
                <li key={index}>{nombre}</li>
                ))}
            </ul>
          
          <input type="text" placeholder="Ingrese un nombre" value={name} onChange={(event) => setName(event.target.value)}> </input>
        </div>
        </>
    )
}

export default FiltroInput;