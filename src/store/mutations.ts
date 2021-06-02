import {State} from "@/store/state";
import {MutationTree} from "vuex";

export const mutations: MutationTree<State> = {
    load(state): void {
        state.loading = false
    }
}
