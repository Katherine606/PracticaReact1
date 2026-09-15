//Crea un componente funcional llamado TarjetaPerfil que reciba mediante props un objeto con 
// nombre, edad y profesión, y los muestre dentro de una tarjeta.

interface Props {
  nombre: string;
  edad: string;
  profesion: string;
}

const TarjetaPerfil = ({ nombre, edad, profesion }: Props) => {
    return (
        <div className="card" style={{ width: "18rem",  textAlign: "center"}}>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{profesion}</h6>
                <p className="card-text">Edad: {edad}</p>
            </div>
        </div>
    );
};

export default TarjetaPerfil;
