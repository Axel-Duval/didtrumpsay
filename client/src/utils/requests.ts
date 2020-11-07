import axios from "axios";
const burl: string = process.env.VUE_APP_API;

export const getQuestions = (count: number) => {
    return axios.get(burl + '/questions',{
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
