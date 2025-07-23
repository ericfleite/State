import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MostrarTexto from './components/MostrarTexto';
import { Pai } from './components/AlteraTexto';
import Tarefa from './components/Tarefa';

const listaTarefas = [
  {
    id: 1,
    titulo: "teste1",
    concluida: false,
  },
  {
    id: 2,
    titulo: "teste2",
    concluida: false,
  },
  {
    id: 3,
    titulo: "teste3",
    concluida: false,
  },
];


function App() {
  const [tarefas, setTarefas] = useState(listaTarefas);

  const concluirTarefa = (id: number) => {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
    );
    setTarefas(novasTarefas);
  };

  return (
    <>
      <h1>Atividade 1</h1>
      <MostrarTexto />
      <br></br><br></br><br></br>
      <h1>Atividade 2</h1>
      <Pai />
      <br></br><br></br><br></br>
      <h1>Lista de Tarefas</h1>
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          onConcluir={() => concluirTarefa(tarefa.id)}
        />
      ))}
    </>
  );
}

export default App;
