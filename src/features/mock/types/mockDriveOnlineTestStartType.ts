export type InitialStateType = {
    status?: string;
    loading?: boolean;
    error?: string | null;
    data: DataType;
};

export type DataType = {
    currentQuestions: {
        quiz: QuizType,
        questions: QuestionType[];
    } | null;
    currentIndex: number;
    selectedOptions: any[];
    progress?: any | null;
    submit?: any | null;
};



export type QuestionType = {
    id?: string;
    title?: string;
    sub_title?: string;
    topic?: string;
    sub_topic?: string;
    difficulty_level?: string;
    code_snippet?: string;
    option_1?: string;
    option_2?: string;
    option_3?: string;
    option_4?: string;
    correct_answer?: string;
    answer_description?: string;
    question_image?: string | null;
};


export type QuizType = {
    title?: string;
    durations?: number;
    total_marks?: string;
}