import style from './conteudo.module.css'

const Conteudo = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children } = props
    return (
        <div className={style.Conteudo}>
            { children }
        </div>
    )
}

export {Conteudo}