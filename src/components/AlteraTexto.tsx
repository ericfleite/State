import { useState, useCallback } from "react";

function Pai() {
  const [mensagem, setMensagem] = useState("");

  
const MngFilho = useCallback(() => {
    setMensagem("Filho falando");
  }, []);

  return (
    <div>
      <Filho onClick={MngFilho} texto={mensagem} />
      <button onClick={() => setMensagem("Nova mensagem!")}>
        Adicionar mensagem pelo componente Pai
      </button>
    </div>
  );
}

type FilhoProps = {
	texto: string;
    onClick: () => void
}

function Filho(props: FilhoProps) {
  return (
	  <div>
		  <p>{props.texto}</p>
		  <button onClick={props.onClick}>
        Atualizar mensagem pelo componente Filho
      </button>
	  </div>
  );
}

export {
	Pai, 
	Filho
}