export namespace endpoints {

    export namespace GET_RANDOM_QUOTES {
        export const method = 'GET';
        export const endpoint = (count?: number) => `/api/quotes?count=${count || 1}`;
        export const expressEndpoint = '/api/quotes';

        interface Quote {
            quote: string;
            prounonced: boolean;
            answers: {
                correct: number;
                incorrect: number;
            },
            sources: string[];
        }

        export interface Response {
            quotes: Quote[]
        }
    }

}