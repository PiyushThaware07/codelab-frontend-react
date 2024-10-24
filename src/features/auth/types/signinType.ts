export type SigninType = {
    email: string;
    password: string;
}



export type InitialStateType = {
    status: "idle" | "loading" | "succces" | "failed";
    loading: boolean;
    data: string | null | SigninType;
    error: string | null | any;
}