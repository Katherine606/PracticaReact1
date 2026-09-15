import { useState } from "react"

interface Props {
    titulo: string;
    descripcion: string;
}

const Acordeon = ({titulo, descripcion}:Props) =>{
    const [visible, setVisible] = useState(false)

    const ocultar = () =>{
        setVisible(!visible)
        
    }

    return (
        <>
        <div style={{textAlign: "center", border: "1px solid black"}}>
            <h1 onClick={ocultar} style={{cursor: "pointer"}}>{titulo}</h1>
            {visible ? <p className="descripcion">{descripcion}</p> : <p></p>}
        </div>  
        </>
    )
}

export default Acordeon