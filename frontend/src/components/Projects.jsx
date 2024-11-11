import { useEffect, useState } from 'react';
import '../assets/scss/components/Projects.scss';

export default function Projects({ className, classTitle, title, classProject, jsonUrl, projectNumber }) {
    const [isVisible, setIsVisible] = useState(false);
    const [projects, setProjects] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Gestion du défilement pour la visibilité des éléments
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Récupération des données JSON
    useEffect(() => {
        if (!jsonUrl) return;
        fetch(jsonUrl)
            .then((response) => {
                if (!response.ok) throw new Error('Erreur lors de la récupération des données JSON');
                return response.json();
            })
            .then((data) => setProjects(data))
            .catch((error) => console.error("Une erreur est survenue :", error));
    }, [jsonUrl]);

    // Ouvrir la modale pour une image spécifique
    const openModal = (index) => {
        const filteredProjects = projects.filter(project => project.project === projectNumber);
        setCurrentIndex(index);  // index relatif aux projets filtrés
        setIsModalOpen(true);
    };

    // Fermer la modale
    const closeModal = () => setIsModalOpen(false);

    // Aller à l'image précédente
    const prevImage = (e) => {
        e.stopPropagation(); // Empêche la fermeture de la modale
        const filteredProjects = projects.filter(project => project.project === projectNumber);
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : filteredProjects.length - 1));
    };

    // Aller à l'image suivante
    const nextImage = (e) => {
        e.stopPropagation(); // Empêche la fermeture de la modale
        const filteredProjects = projects.filter(project => project.project === projectNumber);
        setCurrentIndex((prevIndex) => (prevIndex < filteredProjects.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <section className={className}>
            <h1 className={`${classTitle} ${isVisible ? 'isVisible' : ''}`}>{title}</h1>

            {/* Filtrer et rendre uniquement les projets correspondants à `projectNumber` */}
            {projects
                .filter(project => project.project === projectNumber) // Filtrer les projets ici
                .map((project, index) => (
                    <article key={index} className={`${classProject} ${isVisible ? 'isVisible' : ''}`}>
                        <img
                            src={`http://localhost:4000/images/${project.imageUrl}`}
                            alt={project.name}
                            onClick={() => openModal(index)} // Ouvre la modale au clic
                            className="clickable-image"
                        />
                    </article>
                ))
            }

            {/* Modale d'affichage */}
            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={(e) => { e.stopPropagation(); closeModal(); }}>&times;</span>

                    {/* Vérifiez que currentIndex est dans les limites du tableau filtré */}
                    {projects.filter(project => project.project === projectNumber)[currentIndex] && (
                        <div className="modal-content">
                            <img
                                src={`http://localhost:4000/images/${projects.filter(project => project.project === projectNumber)[currentIndex].imageUrl}`}
                                alt={projects.filter(project => project.project === projectNumber)[currentIndex].name}
                                className="modal-image"
                            />
                            <div className="caption">
                                {currentIndex + 1} / {projects.filter(project => project.project === projectNumber).length}
                            </div>
                            <span className="prev" onClick={prevImage}>&#10094;</span>
                            <span className="next" onClick={nextImage}>&#10095;</span>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}
