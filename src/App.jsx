import './App.css'
import { Cabecalho, Conteudo, Rodape } from './Components'
import { Inicial } from './Pages'

function App() {

  return (
    <>
      <Cabecalho nomeUsuario="Joao"/>
        <Conteudo>
          <Inicial/>
        </Conteudo>
      <Rodape criador="mellygomes"/>
    </>
  )
}

export {App}
