import React, { useState } from "react";

const Formulario = ({guardarBusquedaLetra}) => {
  // State de busqueda
  const [busqueda, guardarBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  // State de Error
  const [error, saveError] = useState(false);

  const { artista, cancion } = busqueda;

  const actualizarState = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (artista.trim() === "" || cancion.trim() === "") {
      saveError(true);
      return;
    }

    saveError(false);

    guardarBusquedaLetra(busqueda)
  };

  return (
    <div className="fondo">
      <h1>Letras de Canciones</h1>
      <div className="container form-busqueda col-md-6">
        <form onSubmit={formSubmit}>
          {error ? (
            <p className="alert alert-danger text-center p-2">
              Debes llenar todos los campos...
            </p>
          ) : null}
          <div className="row busqueda">
            <div className="mitad col-md-6">
              <label htmlFor="artista">Artista</label>
              <input
                type="text"
                className="form-control"
                name="artista"
                placeholder="Nombre Artista"
                onChange={actualizarState}
                value={artista}
              />
            </div>
            <div className="mitad col-md-6">
              <label htmlFor="cancion">Cancion</label>
              <input
                type="text"
                className="form-control"
                name="cancion"
                placeholder="Nombre Canción"
                onChange={actualizarState}
                value={cancion}
              />
            </div>
          </div>
          <div className="boton">
            <button type="submit" className="btn btn-primary w-50">
              Buscar
            </button>
          </div>
        </form>
      </div>
        <hr />
    </div>
  );
};

export default Formulario;
