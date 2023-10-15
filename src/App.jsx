import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import { BaseColaboradores } from "./utils/BaseColaboradores";
import ListadoColaboradores from "./components/Listado";
import FormularioAgregarColaborador from "./components/Formulario";
import BusquedaColaboradores from "./components/BusquedaColaboradores";
import Footer from "./components/Footer";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  const agregarColaborador = (nuevoColaborador) => {
    // Agrega el nuevo colaborador a la lista completa
    setColaboradores([...colaboradores, nuevoColaborador]);

    // Actualiza los resultados de búsqueda con la lista completa
    setResultadosBusqueda([...colaboradores, nuevoColaborador]);
  };

  const handleResultadoBusqueda = (resultados) => {
    setResultadosBusqueda(resultados);
  };

  return (
    <div>
      <BusquedaColaboradores colaboradores={colaboradores} onResultadoBusqueda={handleResultadoBusqueda} />
      <div className="App">
        <ListadoColaboradores datos={resultadosBusqueda.length > 0 ? resultadosBusqueda : colaboradores} />
        <FormularioAgregarColaborador onAgregarColaborador={agregarColaborador} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
