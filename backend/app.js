const express = require('express');
const mongoose = require('mongoose');
const formRoute = require('./routes/form');

// Connexion à MongoDB avec Mongoose
mongoose.connect(process.env.MONGODB_URI, {
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(err => console.error('Erreur de connexion à MongoDB :', err));

const app = express();
app.use(express.json());

// Configuration des en-têtes CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/form', formRoute);

module.exports = app;
