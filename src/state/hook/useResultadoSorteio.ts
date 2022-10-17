import { useRecoilValue } from "recoil"
import { resultadoAmigoSecreto } from "state/atom"

export const useResultadoSorteio = () => {
    return useRecoilValue(resultadoAmigoSecreto);
}