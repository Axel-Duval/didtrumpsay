import Express from 'express';
import dotenv from 'dotenv';
import { setupMiddlewares } from '@/middlewares';
import { setupRoutes } from '@/routes';
import { initDatabase } from '@/database';
import { initServices } from './services';

async function main() {

    dotenv.config();

    const PORT = process.env.PORT || 3000;
    const app = Express();

    const db = await initDatabase();
    const [quotesService] = initServices(db);
    
    setupMiddlewares(app);
    setupRoutes(app, quotesService);

    //Listen on PORT
    app.listen(PORT, () => {
        console.log('Server is running on port : ' + PORT)
    });

}

main().catch(err => console.log(err));
