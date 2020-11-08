import { Router, Response } from 'express';
import { QuotesController } from '@/controllers';
import { QuotesService } from '@/services';
import * as api from '@api';
import { ControllerResponse } from './response';
import path from 'path';

function handleRouteResult(res: Response, result: ControllerResponse<any>) {
    result.then(response => {
        res.status(response.statusCode).json(response.body);
    }).catch((err) => {
        console.error(err);
        res.status(500).json({ 
            status: 500,
            error: 'Internal server error',
        });
    });
}

export function setupRoutes(router: Router, quotesService: QuotesService) {

    const quotesController = new QuotesController(quotesService);

    router.get(api.endpoints.GET_RANDOM_QUOTES.expressEndpoint, (req, res) => {
        handleRouteResult(res, quotesController.getRandomQuotes(req.query.count));
    });

    router.post(api.endpoints.POST_QUOTE_ANSWER.expressEndpoint, (req, res) => {
        handleRouteResult(res, quotesController.collectAnswer(req.body || {}));
    });

    router.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'dist', 'public', 'index.html')));
}
