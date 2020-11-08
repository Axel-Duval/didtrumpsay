export interface Quote {
    quote: string;
    pronounced: boolean;
    answers: {
        correct: number;
        incorrect: number;
    },
    sources: string[];
}