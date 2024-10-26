export type InitialStateType = {
    status: "idle" | "loading" | "success" | "failed";
    loading: boolean;
    error: string | null;
    data: any | null;
}