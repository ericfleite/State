import { useState } from 'react';

function NomeUsuario() {
  const [nome, setNome] = useState("");

  function eventoDeOnChange (event: React.ChangeEvent<HTMLInputElement>) {
    setNome(event.target.value)
  }

  return (
    <div>
      <h2>Bem-vindo(a): {nome}</h2>
      <input type="text"
        placeholder="Digite seu nome"
        onChange={eventoDeOnChange}
        value = {nome}
      />
    </div>
  );
}

export default NomeUsuario;