export type SignupType = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
}

export type InitialStateType = {
    status: "idle" | "loading" | "succces" | "failed";
    loading: boolean;
    data: string | null | SignupType;
    error: string | null | any;
}