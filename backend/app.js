const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const formRoute = require('./routes/form');
const projectsRoute = require('./routes/projectsRoute');

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

// Routes API
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/contact', formRoute);
app.use('/api', projectsRoute);

// Servir les fichiers statiques de React (les fichiers build du frontend)
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// Rediriger toutes les autres requêtes vers `index.html` pour React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

module.exports = app;
