type TarefaProps = {
  id: number;
  titulo: string;
  concluida: boolean;
};

type Props = {
  tarefa: TarefaProps;
  onConcluir: () => void;
};

function Tarefa({ tarefa, onConcluir }: Props) {
  return (
    <div>
      <span style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}>
        {tarefa.titulo}
      </span>
      {!tarefa.concluida && (
        <button onClick={onConcluir}>Concluir</button>
      )}
    </div>
  );
}

export default Tarefa;
