import { AuthState, initialUser } from "@/store/modules/auth/state";
import { MutationTree } from "vuex";
import User from "@/app/shared/models/User";

export const mutations: MutationTree<AuthState> = {
    setUser(state: AuthState, user: Partial<User>): void {
        Object.assign(state.user, user)
    },
    setJwt(state: AuthState, jwt: string): void {
        state.jwt = jwt
    },
    erase(state: AuthState): void {
        state.user = { ...initialUser }
        state.jwt = ""
    },
    setFingerprint(state: AuthState, fingerprint: string): void {
        state.fingerprint = fingerprint
    }
}


