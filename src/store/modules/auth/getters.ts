import { State as RootState } from "@/store/state";
import { AuthState } from "@/store/modules/auth/state";
import { GetterTree } from "vuex";
import User from "@/app/shared/models/User";


export const getters: GetterTree<AuthState, RootState> = {
    hasFingerprint(state: AuthState): boolean {
        return !!state.fingerprint
    },
    fingerprint(state: AuthState): string {
        return state.fingerprint
    },
    authorisedUser(state: AuthState): User {
        return state.user
    },
    isAuthenticated(state: AuthState): boolean {
        return !!state.jwt
    },
    jwt(state: AuthState): string {
        return state.jwt
    }
}
