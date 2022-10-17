import Card from "componentes/Card";
import { useState } from "react";
import { useListaDeParticipantes } from "state/hook/useListaDeParticipantes";
import { useResultadoSorteio } from "state/hook/useResultadoSorteio";
import style from './Sorteio.module.scss';

export const Sorteio = () => {

    const participantes = useListaDeParticipantes();

    const [participanteDaVez, setParticipanteDaVez] = useState('');
    const [amigoSecreto, setAmigoSecreto] = useState('');

    const resultado = useResultadoSorteio();

    const sortear = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!);
        }
    }

    return (
        <Card>
            <section className={style.sorteio}>
                <h2>Quem vai tirar o papelzinho?</h2>
                <form onSubmit={sortear}>
                    <select
                        required
                        name="participanteDaVez"
                        id="participanteDaVez"
                        placeholder="Selecione o seu nome"
                        value={participanteDaVez}
                        onChange={e => setParticipanteDaVez(e.target.value)}
                    >
                        <option>Selecione seu nome</option>
                        {participantes.map(participante => <option key={participante}>{participante}</option>)}
                    </select>
                    <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
                    <button className={style['botao-sortear']}>Sortear</button>
                </form>
                {amigoSecreto && <p className={style.resultado} role={"alert"}>{amigoSecreto}</p>}
                <footer className={style.sorteio}>
                    <img src="/imagens/aviao.png" className={style.aviao} alt="Um desenho de um avião de papel" />
                </footer>
            </section>
        </Card>
    );
}