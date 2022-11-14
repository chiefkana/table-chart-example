export interface IUserStore {
    id: number
    username: string | null
    name: string | null
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address?: IAddress;
    phone?: string;
    website?: string;
    company?: ICompany;
}


export interface IGeo {
    lat: string;
    lng: string;
}

export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

export interface IUserStore {
    id: number
    username: string | null
    name: string | null
}

export interface IGeo {
    lat: string;
    lng: string;
}

export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}
