import { Router } from 'express';

import productList from './products';

const routes = Router();

routes.use('/products', productList);

routes.get('/', function(req,res) {
  res.send("Home");
});

export default routes;
