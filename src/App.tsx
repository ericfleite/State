import { useCallback, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MostrarTexto from './components/MostrarTexto';
import { Pai } from './components/AlteraTexto';
import Tarefa from './components/Tarefa';
import Input from './components/Input';
import NomeUsuario from './components/NomeUsuario';

const listaTarefas = [
  {
    id: 1,
    titulo: "Trabalhar",
    concluida: false,
  },
  {
    id: 2,
    titulo: "Dormir",
    concluida: false,
  },
  {
    id: 3,
    titulo: "Estudar",
    concluida: false,
  },
];


function App() {
  const [tarefas, setTarefas] = useState(listaTarefas);

  const concluirTarefa = useCallback((id: number) => {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
    );
    setTarefas(novasTarefas);
  }, [tarefas]);

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
      <br></br><br></br>
      <h2>Teste de Aula onChange</h2>
      <Input />
      <br></br><br></br>
      <h1>Exercício de Aula onChange</h1>
      <NomeUsuario />
    </>
  );
}

export default App;
