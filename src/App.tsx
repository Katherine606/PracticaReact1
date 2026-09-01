//import Alert from "./Components/Alert.tsx";
import { useState } from "react";
import AlertClose from "./Components/AlertClose.tsx";
import Button from "./Components/Button.tsx";
//import ListGroup from "./Components/ListGroup.tsx";

function App() {
    //let items = ["Guayaquil", "Quito", "Cuenca", "Loja"];

    //const handleSelectItem = (item: string) => {
    //    console.log(`Selected item: ${item}`);
    //}

    //<Alert>
     //   Holap <span style={{ fontWeight: "bold" }}>Mundo</span>
      //</Alert>

  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <AlertClose onClose={() => setShowAlert(false)}>
          Cierra
        </AlertClose>
      )}


      <Button onClick={() => setShowAlert(true)} color="danger">
        boton
      </Button>
    </div>
  );
}

export default App;
