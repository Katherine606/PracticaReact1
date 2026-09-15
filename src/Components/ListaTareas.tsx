import { useState } from "react";

const ListaTareas = () =>{

    const [actualizado, setActualizado] = useState("");
    const [tareas, setTareas] = useState<string[]>([]);
    
    const agregarTarea = ( )=>{
       if (actualizado.trim() === "") return;
        setTareas([...tareas, actualizado])
       setActualizado("")
    }

    return (
        <>

        <div>
            <ul>{tareas.map((tareas, index) => (
                <li key={index}>{tareas}</li>))}  
            </ul>

        </div>
        <div>
            <input type="text" placeholder="Ingrese una tarea" value={actualizado}
          onChange={(event) => setActualizado(event.target.value)}>
          </input>
            <button onClick={agregarTarea}>Agregar tarea</button>
        </div>
        </>
    )
}

export default ListaTareas;
