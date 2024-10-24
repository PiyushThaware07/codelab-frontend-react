type Details = {
    [key: string]: any;
}



export type Drive = {
    id?: string;
    name?: string;
    description?: string;
    category?: string;
    total_price?: string;
    discount?: string;
    logo?: string;
    tags?: string[];
    thumbnail_url?: string;
    details?: Details | any;
}


export type MockDriveListType = {
    company?: Drive[];
    language?: Drive[];
    practice?: Drive[];
}


export type InitialStateType = {
    status?: string;
    data?: MockDriveListType | null | string;
    error?: string | null;
    loading?: boolean;
}