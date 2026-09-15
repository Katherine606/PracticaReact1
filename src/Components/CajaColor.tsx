import { useState } from "react"

const CajaColor = () =>{

    const [color, setColor] = useState("")

    const CambioColor = (nuevoColor: string) =>{
        setColor(nuevoColor);

    }
    return(
    <>
    <div style={{ width: "200px", height: "200px", backgroundColor: color, border: "1px solid black" }}>
        <p>Elija un color</p>
        <button onClick={() => CambioColor('red')}>Rojo</button>
        <button onClick={() => CambioColor('green')}>Verde</button>
        <button onClick={() => CambioColor('blue')}>Azul</button>
    </div>
    

    </>
    )
}

export default CajaColor;