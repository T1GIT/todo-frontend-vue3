import {State} from "@/app/store/state";
import {MutationTree} from "vuex";
import User from "@/app/shared/models/User";


export enum MutationType {
    SET_USER,
    LOAD
}

export type Mutations = {
    [MutationType.SET_USER](state: State, user: Partial<User>): void
    [MutationType.LOAD](state: State): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SET_USER](state, user): void { // TODO: Set User
        // state.user = user
        Object.assign(state.user, user)
    },
    [MutationType.LOAD](state): void {
        state.loaded = true
    }
}


