import { State as RootState } from "@/store/state";
import { GetterTree } from "vuex";


export const getters: GetterTree<RootState, RootState> = {
    isLoaded(state: RootState): boolean {
        return !state.loading
    }
}
