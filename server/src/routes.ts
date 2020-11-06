import { Router } from 'express';
import * as api from '@/rest-api/api';

export function setupRoutes(app: Router) {

    app.get(api.endpoints.GET_RANDOM_QUESTION.endpoint, (req, res) => {
        res.json({ message: 'ok' });
    });

}
