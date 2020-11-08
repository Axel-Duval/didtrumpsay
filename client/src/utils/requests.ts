import axios from "axios";
import * as api from '@/api';

const instance = axios.create({
    baseURL: process.env.VUE_APP_API,
    timeout: 1500,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getQuestions = (count: number) => {
    return instance.get<api.endpoints.GET_RANDOM_QUOTES.Response>(api.endpoints.GET_RANDOM_QUOTES.endpoint(count))
}

export const postAnswer = (_id: string, correctlyAnswered: boolean) => {
    const body: api.endpoints.POST_QUOTE_ANSWER.Request = {_id, correctlyAnswered} 
    return instance.post<api.endpoints.POST_QUOTE_ANSWER.Response>(api.endpoints.POST_QUOTE_ANSWER.endpoint, body)
}