import { useState, useEffect } from "react";
import "./App.css";
import logo from "./logo.svg";
import Formulario from "./components/Formulario";
import Resultados from "./components/Resultados";
import axios from "axios";

function App() {
  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");

  const [info, guardarInfo] = useState({});
  

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) {
      return;
    }

    const apiLetra = async () => {
      const { artista, cancion } = busquedaLetra;
      
      
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([axios(url), axios(url2)]);

      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists[0])
     
      
    };
    apiLetra();
  }, [busquedaLetra]);

  return (
    <div>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra} />
      {letra !== "" ? (
        <Resultados
          artista={busquedaLetra.artista}
          cancion={busquedaLetra.cancion}
          letra={letra}
          info={info}
        />
      ) : null}
    </div>
  );
}

export default App;
