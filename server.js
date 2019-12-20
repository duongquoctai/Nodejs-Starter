import express from 'express';
import './src/environment';
import routes from './src/rest/routes/index';
const server = express();

server.use('/', routes);

server.listen(3000, () => {
  console.log('Server is going up and running at port 3000');
});



