export type QuizChallenge = {
    id: string;
    title: string;
    description: string;
    questions: number;
    total_marks: number;
    durations: number;
    online_test_attempt: number;
    negative_marking: boolean;
    guidelines: string[];
    mock_drive_id: string;
    category_id: string;
};


export type CodeChallenge = {
    id: string;
    title: string;
    description: string;
    category: string;
    questions: number;
    durations: number;
    online_test_attempt: number;
    guidelines: {
        [key: string]: string;
    };
    mock_drive_id: string;
};


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
        rounds: number;
        duration: string;
        difficulty: string;
    };
    quiz: QuizChallenge | null;
    code: CodeChallenge | null;
};


export type InitialStateType = {
    status?: string;
    data?: MockDriveDetailType | null;
    error?: string | null;
    loading?: boolean;
};