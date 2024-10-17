import './App.css'
import { Cabecalho } from './Components'
import { Conteudo } from './Components'
import { Rodape } from './Components'

function App() {

  return (
    <>
      <Cabecalho nomeUsuario="Joao"/>
      <Conteudo>
        <p>texto texto</p> 
      </Conteudo>
      <Rodape criador="mellygomes"/>
    </>
  )
}

export {App}
