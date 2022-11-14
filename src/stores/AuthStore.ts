import { action, makeAutoObservable, observable } from "mobx";

export class AuthStore {
    auth: boolean;

    constructor(){
        makeAutoObservable(this)
        this.auth = false
    }

    @action setAuth = (isAuth: boolean) => {
        this.auth = isAuth;
    }
}