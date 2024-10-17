import style from './rodape.module.css'

const Rodape = (props) => {
    // eslint-disable-next-line react/prop-types
    const { criador } = props

    const anoAtual = (new Date()).getFullYear()
    if (document.querySelector('body').offsetHeight > window.innerHeight) {
        document.querySelector('style.rodape').classList.add('')
    }
    
    return (
        <div  className={style.rodape}> 
            <footer>React Básico - {anoAtual} - @{criador}</footer>
        </div>
    )
}

export {Rodape}