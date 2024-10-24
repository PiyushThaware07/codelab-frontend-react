export type InitialStateType = {
    status: "idle" | "loading" | "succces" | "failed";
    loading: boolean;
    data: string | null | any;
    error: string | null | any;
}