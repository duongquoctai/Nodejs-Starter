import { Router } from 'express';

import { categories, products } from '../controllers/categories';

const routes = Router();

routes.get('/categories', categories);
routes.get('/', products);
// routes.get('/name/:name/', testMid, helloName);

export default routes;
