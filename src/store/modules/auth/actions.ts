import { ActionTree } from "vuex";
import { State as RootState } from "@/store/state";
import { AuthState } from "@/store/modules/auth/state";
import FingerprintJS, { Agent } from "@fingerprintjs/fingerprintjs"

export const actions: ActionTree<AuthState, RootState> = {
    async createFingerprint({ commit }): Promise<string> {
        const agent: Agent = await FingerprintJS.load()
        const { visitorId } = await agent.get()
        commit("setFingerprint", visitorId)
        return visitorId
    }
}
