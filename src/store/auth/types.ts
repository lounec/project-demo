export interface IUser {
    id: number;
    username: string;
    email: string;
    phone: string;
    picture: string;
}

export interface ISlice {
    user: IUser | null;
    isFetching: boolean;
    isError: boolean;
    authenticated: boolean;
}
