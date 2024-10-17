import style from './listatarefas.module.css'
import {ListaTarefasItem} from './ListaTarefasItem'

const ListaTarefas = () => {
    const tarefas = [
        {id: 1, nome: 'Item1'},
        {id: 2, nome: 'Item2'},
        {id: 3, nome: 'Item3'},
    ]
    return (
        <ul className={style.Lista}>
            {tarefas.map(item => <ListaTarefasItem key={item.id} nome={item.nome} />)}
        </ul>
    )
}

export {ListaTarefas}