import { useRef, useState } from "react";
import { useAdicionarParticipante } from "state/hook/useAdicionarParticipante";
import { useMensagemErro } from "state/hook/useMensagemErro";
import style from './Formulario.module.scss';

export const Formulario = () => {

    const [nome, setNome] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const adicionarNaLista = useAdicionarParticipante();
    const mensagemErro = useMensagemErro();

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        adicionarNaLista(nome);
        setNome('');
        inputRef.current?.focus();
    }

    return (
        <form onSubmit={adicionarParticipante}>
            <div className={style['grupo-input-btn']}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Insira os nomes dos participantes"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <button disabled={!nome}>Adicionar</button>
                {mensagemErro && <p className={`${style.alerta} ${style.erro}`} role={"alert"}>{mensagemErro}</p>}
            </div>
        </form>
    );
}