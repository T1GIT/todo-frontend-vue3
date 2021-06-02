import { createStore, Store } from 'vuex'
import { state, State } from "@/store/state"
import { NODE_ENV } from "@/environment"
import { mutations } from "@/store/mutations"
import { authModule as authStore } from "@/store/modules"

export const store: Store<State> = createStore<State>({
    strict: NODE_ENV === 'production',
    state,
    mutations,
    modules: {
        auth: authStore
    }
})
