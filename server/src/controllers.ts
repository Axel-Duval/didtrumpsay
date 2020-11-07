import { QuotesService } from '@/services';
import * as api from '@/rest-api/api';

export class QuotesController {

    constructor(private quotesService: QuotesService) {}

    async getRandomQuotes(countStr?: any): Promise<api.endpoints.GET_RANDOM_QUOTES.Response> {
        let count = parseInt(countStr);
        if (isNaN(count)) {
            count = 1;
        }
        const quotes = await this.quotesService.getRandomQuotes(count || 1);
        return {
            quotes
        };
    }

}
