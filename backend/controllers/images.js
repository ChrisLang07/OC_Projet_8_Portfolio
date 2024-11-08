const path = require('path');
const fs = require('fs');

exports.getProjectImages = (req, res) => {
    // On récupère le nom du projet depuis l'URL
    const projectName = req.params.project;

    // Chemins des dossiers d'images et des fichiers JSON du projet
    const imageDir = path.join(__dirname, '../images', projectName);
    const jsonFilePath = path.join(__dirname, '../data', `${projectName}.json`);

    // Vérifie si le dossier d'images existe
    if (!fs.existsSync(imageDir)) {
        return res.status(404).json({ message: "Projet non trouvé" });
    }

    // Récupère la liste des images dans le dossier
    fs.readdir(imageDir, (err, files) => {
        if (err) {
            return res.status(500).json({ message: "Erreur lors de la lecture des images" });
        }

        // Filtre uniquement les fichiers d'images et crée un tableau de chemins
        const images = files
            .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)) // garde seulement les images
            .map(file => `/images/${projectName}/${file}`); // construit les URLs des images

        // Vérifie si le fichier JSON existe et le lit
        let projectData = {};
        if (fs.existsSync(jsonFilePath)) {
            projectData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
        }

        // Renvoie la liste des images et les données du projet (si présentes)
        res.json({ images, projectData });
    });
};
