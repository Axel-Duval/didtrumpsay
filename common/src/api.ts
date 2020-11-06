export namespace endpoints {

    export namespace GET_RANDOM_QUESTION {
        export const method = 'GET';
        export const endpoint = '/question';
        export interface Response {
            message: string;
        }
    }

}