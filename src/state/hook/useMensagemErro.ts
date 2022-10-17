import { useRecoilValue } from "recoil"
import { erroState } from "state/atom"

export const useMensagemErro = () => {
    const mensagem = useRecoilValue(erroState);
    return mensagem;
}