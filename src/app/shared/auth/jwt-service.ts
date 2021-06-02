import User, { Role } from "@/app/shared/models/User";
import { computed, ComputedRef } from "vue";
import { authController, LoginForm, RegisterForm } from "@/app/shared/auth/auth-http";
import { useStore } from "vuex";

type JwtPayload = {
    exp: number,
    iat: number,
    iss: string,
    aud: Role
} & User

async function parseJwt(token: string): Promise<JwtPayload> {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload)
}

type JwtServiceReturnType = {
    startUpdateCycle: (jwt: string) => Promise<User>,
    stopUpdateCycle: () => void
}

const useJwtService = function (): JwtServiceReturnType {
    const store = useStore()

    const fingerprint = computed(() => store.getters["auth/fingerprint"])

    let timer: number

    async function updateJwt(): Promise<void> {
        const { data: { jwt } } = await authController.refresh(fingerprint.value)
        store.commit('auth/setJwt', jwt)
    }

    return {
        startUpdateCycle: async function (jwt: string): Promise<User> {
            const payload: JwtPayload = await parseJwt(jwt)
            const { exp, iat, aud, iss, ...user } = payload
            store.commit('auth/setJwt', jwt)
            store.commit('auth/setUser', user)
            clearInterval(timer)
            timer = setInterval(updateJwt, (exp - iat) * 1000)
            return user
        },

        stopUpdateCycle: function (): void {
            clearInterval(timer)
        }
    }
}

export default useJwtService
