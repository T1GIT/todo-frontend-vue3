import User, { Role } from "@/app/shared/models/User";

export type AuthState = {
    fingerprint: string
    jwt: string
    user: User
}

export const initialUser: User = {
    id: 0,
    email: "",
    name: "",
    surname: "",
    patronymic: "",
    birthdate: undefined,
    role: Role.BASIC
}

export const state: AuthState = {
    fingerprint: "",
    jwt: "",
    user: {...initialUser}
}
