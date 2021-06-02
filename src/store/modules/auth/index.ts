import { Module } from 'vuex'
import { state, AuthState } from "@/store/modules/auth/state";
import { State as RootState } from "@/store/state";
import { mutations } from "@/store/modules/auth/mutations";
import { actions } from "@/store/modules/auth/actions";
import { getters } from "@/store/modules/auth/getters";


export const authModule: Module<AuthState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
