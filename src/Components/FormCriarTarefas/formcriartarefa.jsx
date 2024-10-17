import { CampoTexto, Botao } from '../../Components'
import style from './formcriartarefa.module.css'

const FormCriarTarefa = () => {
    return (
        <form className={style.Form}>
            <CampoTexto/>
            <Botao texto="+"/>

        </form>
    )
}

export {FormCriarTarefa}