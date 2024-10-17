import { Botao, TIPO_BOTAO } from "../../Botao"
import style from './listatarefasitem.module.css'

const ListaTarefasItem = (props) => {
    // eslint-disable-next-line react/prop-types
    const {nome} = props 

    return (
        <li className={style.Item}>
            {nome}
            <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO}/>  
        </li>
    )
}

export {ListaTarefasItem}