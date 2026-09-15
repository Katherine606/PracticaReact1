import { useState } from "react";

const BotonToggle = () => {
    const [isActive, setActive] = useState(false); 

    const activar = () => {
        setActive(!isActive); // Invierte el estado actual de forma directa
    }

    return (
        <>
            <h1>Aqui hay un boton</h1>
            <button onClick={activar} className="btn btn-primary"> 
                Este es un boton: {isActive ? "Encendido" : "Apagado"} 
            </button>
        </>
    );
}

export default BotonToggle;