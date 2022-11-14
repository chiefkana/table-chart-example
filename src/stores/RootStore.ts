import { makeAutoObservable } from 'mobx';
import {AuthStore} from './AuthStore'
import {UserStore} from './UserStore'

export class RootStore {
    public userStore: UserStore;
    public authStore: AuthStore;

    constructor(){
        makeAutoObservable(this)
        this.authStore = new AuthStore()
        this.userStore = new UserStore(this)
    }
}
