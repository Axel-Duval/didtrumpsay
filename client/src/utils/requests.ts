import axios from "axios";
import * as api from '@/rest-api/api';
const burl: string = process.env.VUE_APP_API;
/*
export const getQuestions = (count: number) => {
    return axios({
        method: api.endpoints.GET_RANDOM_QUOTES.method,
        url: api.endpoints.GET_RANDOM_QUOTES.endpoint(count),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
*/

export const getQuestions = (count: number): Promise<any> => {
    return new Promise((resolve, reject) => {
        const res = {
            data: [
                {
                    quote: 'I will build a great, great wall on our southern border, and I will have Mexico pay for that wall. I will have Mexico pay for that wall.',
                    pronounced: true,
                    sources: ['https://youtube.com'],
                    answers: {
                        good: 342,
                        bad: 218
                    }
                },
                {
                    quote: 'I hate vegetables',
                    pronounced: false,
                    answers: {
                        good: 342,
                        bad: 218
                    }
                }
            ]
        }
        setTimeout(() => {
            resolve(res);
        }, 2000);
    });
}