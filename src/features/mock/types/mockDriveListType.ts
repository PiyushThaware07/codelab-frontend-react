export type CategoryType = {
    id:string;
    category: string;
    name: string;
    description: string;
    tags: string[];
    thumbnail_url: string;
    total_price: string;
    discount: string;
    logo: string;
    details: {
        [key: string]: any
    } | null;
}


export type InitialStateType = {
    status: "idle" | "loading" | "success" | "failed";
    loading: boolean;
    error: string | null;
    data: {
        company: CategoryType[],
        language: CategoryType[],
    } | null;
}