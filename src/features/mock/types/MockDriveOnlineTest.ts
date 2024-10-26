export type QuestionType = {
    id: string;
    title: string;
    sub_title: string;
    topic: string;
    sub_topic: string;
    difficulty_level: string;
    code_snippet: string;
    option_1: string;
    option_2: string;
    option_3: string;
    option_4: string;
    question_image: string;
};



export type QuizType = {
    title: string;
    total_marks: number;
    durations: number;
};


export type SelectOptionType = {
    questionId: string;
    selectedOption: any;
}


export type DataType = {
    currentIndex: number | any;
    selectedOptions: SelectOptionType[];
    currentQuestions: {
        questions: QuestionType[],
        quiz: QuizType | null | any,
    };
    currentTiming: number;
}


export type InitialStateType = {
    status: "idle" | "loading" | "success" | "failed";
    loading: boolean;
    error: string | null;
    data: DataType | null | any;
}