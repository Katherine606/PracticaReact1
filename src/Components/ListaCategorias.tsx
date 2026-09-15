
interface Props {
    categorias: string[];
    titulo: string;
}

function ListaCategorias({ categorias, titulo }: Props) {

    return (
        <>
          <h1>{titulo}</h1>
          {categorias.length === 0 && <p>No hay categorias</p>}
          <ul>
            {categorias.map((categorias) => 
            <li>{categorias}</li>
            )}
          </ul>
        </>
    );
}

export default ListaCategorias;