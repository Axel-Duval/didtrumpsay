export const method = 'POST';
export const endpoint = '/api/quotes/answers';
export const expressEndpoint = endpoint;

export interface Request {
    _id: string;
    correctlyAnswered: boolean;
}

export interface Response {
    updated: string;
}