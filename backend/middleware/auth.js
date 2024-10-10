const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Récupère le token de l'en-tête Authorization
        const decodedToken = jwt.verify(token, 'RANDOM_SECRET_KEY'); // Vérifie et décode le token
        const userId = decodedToken.userId; // Récupère l'userId à partir du token décodé
        req.auth = { userId }; // Ajoute l'userId à l'objet req
        next(); // Passe au prochain middleware ou à la route
    } catch (error) {
        res.status(401).json({ error: 'Requête non authentifiée !' });
    }
};
