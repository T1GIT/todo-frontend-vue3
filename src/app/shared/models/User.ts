import Model from "@/app/shared/models/Model";

export enum Role {
    ADMIN = "ROLE/ADMIN",
    BASIC = "ROLE/BASIC"
}

interface User extends Model {
    email: string
    psw?: string
    name?: string
    surname?: string
    patronymic?: string
    birthdate?: Date
    role: Role
}

export default User
