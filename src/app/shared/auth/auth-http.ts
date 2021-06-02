import axios, { AxiosInstance, AxiosResponse } from "axios";
import { TODO_API_BASE_URL } from "@/environment";
import User from "@/app/shared/models/User";

const url: URL = new URL('authorisation', TODO_API_BASE_URL)

const config = {
    baseURL: url.toString(),
    withCredentials: true
}

const httpClient: AxiosInstance = axios.create(config)

export type LoginForm = Required<Pick<User, "email" | "psw">>

export type RegisterForm = LoginForm & Omit<Partial<User>, "id">

export const authController = {
    register(
        user: RegisterForm,
        fingerprint: string
    ): Promise<AxiosResponse<{
        jwt: string
    }>> {
        return httpClient.post("/register", {
            user,
            fingerprint
        })
    },

    login(
        user: LoginForm,
        fingerprint: string
    ): Promise<AxiosResponse<{
        jwt: string
    }>> {
        return httpClient.post("/login", {
            user,
            fingerprint
        })
    },

    refresh(
        fingerprint: string
    ): Promise<AxiosResponse<{
        jwt: string
    }>> {
        return httpClient.post("/refresh", {
            fingerprint
        })
    },

    logout(): Promise<AxiosResponse<void>> {
        return httpClient.post("/login")
    },
}
