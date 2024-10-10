const http = require('http');
require('dotenv').config(); // Charger les variables d'environnement
const app = require('./app');

const server = http.createServer(app);

server.listen(process.env.PORT || 4000);
