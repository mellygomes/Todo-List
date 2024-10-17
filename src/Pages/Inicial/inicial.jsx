import { FormCriarTarefa, ListaTarefas } from '../../Components'
import style from './inicial.module.css'

const Inicial = () => {
    return (
        <div className={style.Inicial}>
        <FormCriarTarefa/>
        <ListaTarefas/>
        </div>
    )
}

export {Inicial}