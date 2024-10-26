export type InitialStateType = {
    status: "idle" | "loading" | "success" | "failed";
    loading: boolean;
    error: string | null;
    data: null | any;
}


export type QuizRound = {
    id: string;
    title: string;
    description: string;
    is_active: boolean;
    questions: number;
    total_marks: number;
    durations: number;
    online_test_attempt: number;
    negative_marking: boolean;
    guidelines: string[];
}

export type MockDriveDetailType = {
    id: string;
    name: string;
    description: string;
    category: string;
    total_price: string;
    discount: string;
    logo: string;
    tags: string[];
    thumbnail_url: string;
    details: {
        [key: string]: any
    }
    quiz: QuizRound;
    code: null;
};
