import { useState } from "react";

const inputName = ()=>{

 const [name, setName] = useState("");

    return(
        <div>
          <input type="text" placeholder="Ingrese su nombre" value={name}
          onChange={(event) => setName(event.target.value)}>
          </input>
          <p>Hola, {name || "visitante"}</p>
        </div>
    )
}

export default inputName;