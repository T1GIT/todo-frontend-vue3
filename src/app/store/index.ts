import { CommitOptions, createStore, DispatchOptions, Store as VuexStore } from 'vuex'
import { state, State } from "@/app/store/state";
import { NODE_ENV } from "@/environment"
import { Mutations, mutations } from "@/app/store/mutations";
import { Getters, getters } from "@/app/store/getters";
import { Actions, actions } from "@/app/store/actions";
import { modules } from "@/app/store/modules";


export const store = createStore<State>({
    strict: NODE_ENV === 'production',
    state,
    mutations,
    actions,
    getters,
    modules
})

export type Store = Omit<VuexStore<State>,
    'getters' | 'commit' | 'dispatch'> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload?: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>
    }
}

export function useStore(): Store {
    return store as Store;
}
