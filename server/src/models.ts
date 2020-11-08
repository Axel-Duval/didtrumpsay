import { ObjectId } from "mongodb";

export interface Quote {
    _id: ObjectId;
    quote: string;
    pronounced: boolean;
    answers: {
        correct: number;
        incorrect: number;
    },
    sources: string[];
}