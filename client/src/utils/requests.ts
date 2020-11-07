import axios from "axios";
const burl: string = process.env.VUE_APP_API;
/*
export const getQuestions = (count: number) => {
    
    console.log(process.env.VUE_APP_API, count)
    return axios.get(burl + '/questions',{
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
                    quote: 'I luve mushrooms',
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