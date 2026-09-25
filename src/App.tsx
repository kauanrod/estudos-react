import { useState } from "react";

interface InfoALunoProps {
  nome?: string;
  idade?: string;
}

export default function App() {
  const [alunoInput, setAlunoInput] = useState("")
  const [idadeInput, setIdadeInput] = useState("")
  const [contador, setContador] = useState(0)

  const [infoAluno, setInfoAluno] = useState<InfoALunoProps>()

  function mostrarAluno() {
    setInfoAluno(
      {
        nome: alunoInput,
        idade: idadeInput
      }
    )
  }

  function adicionar() {
    setContador(valorAtual => valorAtual+1)
  }

  function subtrair() {
    if (contador == 0) return;
    setContador(valorAtual => valorAtual-1)
  }
  return (
    <div>
      <h1>Conhecendo useState</h1>

      <input placeholder="Nome" value={alunoInput} onChange={(e) => setAlunoInput(e.target.value)} />
      <br/>
      <input placeholder="Idade" value={idadeInput} onChange={(e) => setIdadeInput(e.target.value)} />
      <br />
      <button onClick={mostrarAluno}>Mostrar aluno</button>
      <hr />
      {infoAluno?.nome && <h3>Bem vindo: {infoAluno?.nome}, idade: {infoAluno?.idade} anos</h3>}
      <h4>Contador com useState:</h4>
      <br/>
      <button onClick={adicionar}>+</button>{contador}<button onClick={subtrair}>-</button>
    </div>
  )
}