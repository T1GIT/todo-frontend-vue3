import { State } from "@/app/store/state";
import { GetterTree } from "vuex";

export type Getters = {
    isAuthorized(state: State): boolean
}

export const getters: GetterTree<State, State> & Getters = {
    isAuthorized(state) {
        return !!state.user
    }
}
