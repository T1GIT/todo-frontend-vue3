import { ActionContext, ActionTree } from "vuex";
import { State } from "@/app/store/state";
import { Mutations } from "@/app/store/mutations";

export enum ActionTypes {
    GET
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}

export type Actions = {
    [ActionTypes.GET](context: ActionAugments): void
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.GET](context): void {
        return
    }
}
