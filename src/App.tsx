export default function App() {
  return(
    <div>
      <h1>Hello World</h1>
      <Aluno nome = "Júlia Motte" idade = {23}/>
      <Aluno nome = "Kauan Rodrigues" idade = {24}/>
    </div>
  )
}

interface AlunoProps {
  nome: string;
  idade: number;
}

function Aluno({ nome, idade }: AlunoProps) {
  return(
    <div>      
      <h2>Aluno: {nome}</h2>
      <h3>Idade: {idade}</h3>
    </div>
  )
}