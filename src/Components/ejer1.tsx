//4 y 5. Listas Dinámicas y Estado (React)
//Crea un componente en React que reciba una lista de tareas por props 
//y utilice useState para guardar el índice de la tarea seleccionada y aplicarle la clase 
// active de Bootstrap al hacer clic.

import { useState } from 'react';

type Tarea = {
    id: number;
    Titulo: string;
};

type ListaTareasProps = {
    tareas: Tarea[];
};

function ListaTareas({ tareas }: ListaTareasProps) {
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);

    return (
        <ul className="list-group">
            {tareas.map((t: Tarea, index: number) => (
                <li
                    key={t.id}
                    className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                    onClick={() => setSelectedIndex(index)}
                >
                    {t.Titulo}
                </li>
            ))}
        </ul>
    );
}

export default ListaTareas;