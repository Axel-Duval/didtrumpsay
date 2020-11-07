import * as api from '@api';
import { QuotesService } from '@/services';
import { ControllerResponse, StatusCode, errored, ok } from '@/response';

export class QuotesController {

    constructor(private quotesService: QuotesService) {}

    async getRandomQuotes(countStr?: any): ControllerResponse<api.endpoints.GET_RANDOM_QUOTES.Response> {
        let count = parseInt(countStr);
        if (isNaN(count)) {
            return errored(StatusCode.BadRequest, '"count" query argument must be an integer');
        }
        if (count < 1) {
            return errored(StatusCode.BadRequest, '"count" query argument must be strictly positive');
        }
        if (count > 100) {
            return errored(StatusCode.BadRequest, '"count" query argument must be lower than or equal to 100');
        }
        const quotes = await this.quotesService.getRandomQuotes(count || 1);
        return ok(StatusCode.Ok, { quotes });
    }

    async collectAnswer(body: any): ControllerResponse<api.endpoints.POST_QUOTE_ANSWER.Response> {

        const validatedBody: api.endpoints.POST_QUOTE_ANSWER.Request = { _id: '', correctlyAnswered: false };
        
        if (typeof body._id !== 'string') {
            return errored(StatusCode.BadRequest, '"_id" must be a string');
        }
        validatedBody._id = body._id;

        if (typeof body.correctlyAnswered !== "boolean") {
            return errored(StatusCode.BadRequest, '"correctlyAnswered" must be a boolean');
        }
        validatedBody.correctlyAnswered = body.correctlyAnswered;

        let quoteId: string | null;
        if (validatedBody.correctlyAnswered) {
            quoteId = await this.quotesService.addCorrectAnswer(validatedBody._id);
        } else {
            quoteId = await this.quotesService.addIncorrectAnswer(validatedBody._id);
        }

        if (quoteId === null) {
            return errored(StatusCode.NotFound, { _id: validatedBody._id, message: 'Unable to find a quote with this id '});
        }

        return ok(StatusCode.Ok, {
            updated: quoteId
        });
    }

}
