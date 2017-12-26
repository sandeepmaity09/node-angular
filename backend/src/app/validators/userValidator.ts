export class UserValidator {
    constructor() { }

    public static isValidEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    public static isValidPassword(password){
        if(password.length < 10)
            return true;
        return false;
    }
}