interface ControllerResult<T> { 
    statusCode: StatusCode, 
    body: T
};

export type ControllerResponse<T> = Promise<ControllerResult<T> | ControllerResult<{ status: number, error: any}>>;

export enum StatusCode {
    Ok = 200,
    BadRequest = 400,
    NotFound = 404,
    InternalServerError = 500,
}

export function errored(statusCode: StatusCode, error: any): ControllerResult<{ status: number, error: any}> {
    return {
        statusCode,
        body: {
            status: statusCode,
            error
        }
    }
}

export function ok<T>(statusCode: StatusCode, body: T): ControllerResult<T> {
    return {
        statusCode,
        body,
    };
}
