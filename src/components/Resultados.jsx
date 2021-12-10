import React from "react";

const Resultados = ({ artista, cancion, letra, info }) => {
  Object.defineProperty(String.prototype, "capitalizar", {
    value: function () {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    writable: true, // Asi, puede sobreescribirse más tarde
    configurable: true, // Asi, puede borrarse más tarde
  });

  return (
    <div className="container mt-5 ml-20">
      <div className="row">
        <div className="col-md-5 div-letra">
          <h2>{cancion.capitalizar()}</h2>
          <h5>Artista: {artista.capitalizar()}</h5>
          <hr />
          <p className="letra">{letra}</p>
        </div>

        <div className="card border-light col-md-6 div-info">
          <h2 className="card-header">{artista.capitalizar()}</h2>
          <p className="card-text"><b>Género:</b> {info.strGenre}</p>
          <div className="card-body">
            <img src={info.strArtistThumb} alt="" />

            <p className="card-text">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook" style={{fontSize: 50, marginRight:30}}></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter" style={{fontSize: 50, marginRight:30}}></i>
                    </a>
                    <a href={`https://${info.strWebsite}`} target="_blank" >
                    <i className="bi bi-globe" style={{fontSize: 50, marginRight:30}}></i>
                    </a>
                </p>

            <h3>Info:</h3>
            <hr />
            {info.strBiographyES === "" ? (
              <p>{info.strBiographyES}</p>
            ) : (
              <p>{info.strBiographyEN}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultados;

/* <div className="alert alert-warning">No encontrado</div> */
