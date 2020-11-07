interface Quote {
    quote: string;
    prounonced: boolean;
    answers: {
        correct: number;
        incorrect: number;
    },
    sources: string[];
}

export namespace endpoints {

    export namespace GET_RANDOM_QUOTES {
        export const method = 'GET';
        export const endpoint = (count?: number) => `/api/quotes?count=${count || 1}`;
        export const expressEndpoint = '/api/quotes';

        export interface Response {
            quotes: Quote[]
        }
    }

    export namespace POST_QUOTE_ANSWER {
        export const method = 'POST';
        export const endpoint = '/api/quotes/answers';
        export const expressEndpoint = endpoint;

        export interface Request {
            _id: string;
            correctlyAnswered: boolean;
        }

        export interface Response {
            updated: string;
        };
    }

}