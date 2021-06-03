export type ValidatorReturnType = {
    valid: boolean,
    msg?: string
}

const validate = {
    email(email: string): ValidatorReturnType {
        return {
            valid: true,
        }
    },
    psw(psw: string): ValidatorReturnType {
        return {
            valid: true
        }
    },
    rePsw(firstPsw: string, secondPsw: string): ValidatorReturnType {
        return {
            valid: true
        }
    }
}

export default validate
