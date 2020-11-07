export interface Quote {
    quote: string;
    prounonced: boolean;
    answers: {
        correct: number;
        incorrect: number;
    },
    sources: string[];
}