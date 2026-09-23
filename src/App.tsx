import { Header } from './components/header';
import { Aluno } from './components/aluno';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div>
      <Header title="Teste" />
      <Aluno nome="Júlia Motte" idade={23} />
      <Aluno nome="Kauan Rodrigues" idade={24} />
      <Footer />
    </div>
  )
}