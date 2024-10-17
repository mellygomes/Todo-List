import style from './botao.module.css'
import {TIPO_BOTAO} from './constants' 

const Botao = (props) => {
    // eslint-disable-next-line react/prop-types
    const {texto, tipo=TIPO_BOTAO.PRIMARIO, ...outrasProps} = props

    return (
        <button className={style.Botao} type={tipo} {...outrasProps}>
            {texto}
        </button>
    )
}

export {Botao}