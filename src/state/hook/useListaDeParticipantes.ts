import { useRecoilValue } from "recoil"
import { listaParticipantesState } from "state/atom"

export const useListaDeParticipantes = () => {
    return useRecoilValue(listaParticipantesState);
}