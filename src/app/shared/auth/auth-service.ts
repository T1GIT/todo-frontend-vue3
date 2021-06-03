import { computed, ComputedRef } from "vue"
import { useStore } from "vuex";
import User from "@/app/shared/models/User";
import { authController, LoginForm, RegisterForm } from "@/app/shared/auth/auth-http";
import useJwtService from "@/app/shared/auth/jwt-service";

export type AuthServiceReturnType = {
    authUser: ComputedRef<User>,
    isAuthenticated: ComputedRef<boolean>,
    register: (registerForm: RegisterForm) => Promise<User>,
    login: (loginForm: LoginForm) => Promise<User>,
    logout: () => Promise<void>
}

export default function useAuthService (): AuthServiceReturnType {
    const store = useStore()

    const fingerprint: ComputedRef<string> = computed(() => store.getters["auth/fingerprint"])

    const { startUpdateCycle, stopUpdateCycle } = useJwtService()

    return {
        authUser: computed(() => store.getters["auth/authorisedUser"]),

        isAuthenticated: computed(() => store.getters["auth/isAuthenticated"]),

        register: async function (
            registerForm: RegisterForm
        ): Promise<User> {
            const { data: { jwt } } = await authController.register(registerForm, fingerprint.value)
            return await startUpdateCycle(jwt)
        },

        login: async function (
            loginForm: LoginForm
        ): Promise<User> {
            const { data: { jwt } } = await authController.login(loginForm, fingerprint.value)
            return await startUpdateCycle(jwt)
        },

        logout: async function (): Promise<void> {
            await authController.logout()
            store.commit('auth/erase')
            stopUpdateCycle()
        }
    }
}
