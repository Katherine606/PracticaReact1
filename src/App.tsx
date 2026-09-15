//import Alert from "./Components/Alert.tsx";

import BotonToggle from "./Components/BotonToggle.tsx";
import Counter from "./Components/Counter.tsx";
import InputName from "./Components/InputName.tsx";
import ListaCategorias from "./Components/ListaCategorias.tsx";
import CajaColor from "./Components/CajaColor.tsx";
import Acordeon from "./Components/Acordeon.tsx";
//import ListGroup from "./Components/ListGroup.tsx";

function App() {
    let categorias = ["Hogar", "Cocina", "Exterior", "Baño"];

    //const handleSelectItem = (item: string) => {
    //    console.log(`Selected item: ${item}`);
    //}

    //<Alert>
     //   Holap <span style={{ fontWeight: "bold" }}>Mundo</span>
      //</Alert>

 // const [showAlert, setShowAlert] = useState(false);

  return (
   <>
   <ListaCategorias categorias={categorias} titulo="TIENDITA"/>
   <Acordeon titulo="soy un acordeon" descripcion="holap" />
   </>
  )


}

export default App;
