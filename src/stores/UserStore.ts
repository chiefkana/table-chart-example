import { observable, action, makeAutoObservable} from 'mobx'
import { IUserStore, IUser } from '../helpers/interfaces';
import { AuthServiceInstance } from '../services';
import { RootStore } from './RootStore';

export class UserStore implements IUserStore { 
    private rootStore: RootStore;

    id = 0;
    username = '';
    name = '';

    constructor(rootStore: RootStore) {
        makeAutoObservable(this)
        this.rootStore = rootStore;
    }

    @action setUser = async (username: string): Promise<void> => {
        let user: IUser | null = null
        user = await AuthServiceInstance.getUsers(username).then(result => result)
        
        if(user) {
            this.username = user.username;
            this.id = user.id;
            this.name = user.name;
            this.rootStore.authStore.setAuth(true)
        } else {
            this.rootStore.authStore.setAuth(false)
            this.id = 0;
            this.username = '';
            this.name = '';
        }
    }
    
}