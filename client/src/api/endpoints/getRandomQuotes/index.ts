import { Quote } from '../../quote';

export const method = 'GET';
export const endpoint = (count?: number) => `/api/quotes?count=${count || 1}`;
export const expressEndpoint = '/api/quotes';

export interface Response {
    quotes: Quote[];
}