import { Router, Response } from 'express';
import { QuotesController } from '@/controllers';
import { QuotesService } from '@/services';
import * as api from '@/rest-api/api';

function handleRouteResult(res: Response, result: Promise<any>) {
    result.then(body => {
        res.status(200).json(body);
    }).catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    });
}

export function setupRoutes(router: Router, quotesService: QuotesService) {

    const quotesController = new QuotesController(quotesService);

    router.get(api.endpoints.GET_RANDOM_QUOTES.expressEndpoint, (req, res) => {
        handleRouteResult(res, quotesController.getRandomQuotes(req.query.count));
    });

}
