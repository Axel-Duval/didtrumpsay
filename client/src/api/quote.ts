export interface Quote {
    _id: string;
    quote: string;
    pronounced: boolean;
    answers: {
        correct: number;
        incorrect: number;
    };
    sources: string[];
}