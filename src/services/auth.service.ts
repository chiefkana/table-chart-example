import axios, {AxiosResponse} from "axios";
import { apiUrl } from "../constants/url.constants";
import { useStore } from "../helpers/hooks";
import { IAuthService, IUser } from "../helpers/interfaces";

const AuthClient = axios.create({
  baseURL: apiUrl,
});

class AuthService implements IAuthService{

    getUsers = async (username: string): Promise<IUser> => {

        const user = await AuthClient.get("users").then((response: AxiosResponse<IUser[]>): IUser => response.data.filter(e=> e.username === username)[0]);
        
        return user
    };

    
}

export const AuthServiceInstance = new AuthService();
