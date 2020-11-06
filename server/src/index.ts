import Express from 'express';
import dotenv from 'dotenv';
import { setupMiddlewares } from '@/middlewares';
import { setupRoutes } from '@/routes';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = Express();

setupMiddlewares(app);
setupRoutes(app);

//Listen on PORT
app.listen(PORT, () => {
    console.log('Server is running on port : ' + PORT)
});
