import style from './cabecalho.module.css'

const Cabecalho = () => {
    return (
        <div className={style.container}>
        <div className={style.Cabecalho}> <h1><span>Todo </span>List</h1></div>
        </div>
    )
}

export {Cabecalho}