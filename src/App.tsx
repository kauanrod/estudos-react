import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("")
  const [aluno, setAluno] = useState("")
  const [idade, setIdade] = useState("")

  function mostrarAluno() {
    setAluno(input);
    setIdade(idade);
  }
  return (
    <div>
      <h1>Conhecendo useState</h1>

      <input placeholder="Nome" value={input} onChange={(e) => setInput(e.target.value)} />
      <input placeholder="Idade" value={idade} onChange={(e) => setInput(e.target.value)} />
      <br />
      <button onClick={mostrarAluno}>Mostrar aluno</button>
      <hr />
      {aluno && <h3>Bem vindo: {aluno}, idade: {idade}</h3>}
    </div>
  )
}