import User from "@/app/shared/models/User";

export type State = {
    loaded: boolean
    user?: User
}

export const state: State = {
    loaded: false,
    user: undefined
}
