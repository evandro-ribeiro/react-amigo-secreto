import style from './Cabecalho.module.scss';

const Cabecalho = () => {
    return (
        <header className={style.cabecalho}>
            <div className={style['imagem-logo']} role="img" aria-label='Logo do Sorteador'></div>
            <img className={style.participante} src="/imagens/participante.png" alt="Participante com um presente na mão" />
        </header>
    )
}

export default Cabecalho