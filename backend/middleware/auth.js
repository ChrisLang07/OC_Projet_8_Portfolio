const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; 
        const decodedToken = jwt.verify(token, 'RANDOM_SECRET_KEY'); 
        const userId = decodedToken.userId; 
        req.auth
    } catch (error) {
        res.status(401).json({ error: 'Requête non authentifiée !' });
    }
};
