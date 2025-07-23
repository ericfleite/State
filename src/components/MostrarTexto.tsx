import { useState } from "react";

function MostrarTexto() {
  const [visivel, setVisivel] = useState(false)

  const Altera = () => {
    if (visivel === false) {
        setVisivel(true)
    }
    else {
        setVisivel(false)
    }
  }

  return (
    <div>
      <button onClick={Altera}>
        Mostrar/Ocultar
      </button>

      {/* Mostre esse parágrafo só se visivel for true */}
      {visivel === true && <p>Você consegue me ver?</p>}
    </div>
  );
}

export default MostrarTexto;