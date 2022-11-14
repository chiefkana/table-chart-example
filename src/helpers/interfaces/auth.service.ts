import { IUser } from "./user.interface"

interface IAuthService{
    getUsers(username: string): Promise<IUser>
}

export type {IAuthService}