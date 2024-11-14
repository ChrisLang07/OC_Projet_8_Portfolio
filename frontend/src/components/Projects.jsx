import { useEffect, useState } from 'react';
import '../assets/scss/components/Projects.scss';

export default function Projects({ className, classTitle, title, classProject, jsonUrl, projectNumber }) {
    const [isVisible, setIsVisible] = useState(false);
    const [projects, setProjects] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Vérification de la visibilité du composant lors du scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Récupération des données via l'API
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

    // Filtrer les projets par numéro
    const filteredProjects = projects.filter((project) => project.project === projectNumber);

    // Ouvrir la modale pour une image donnée
    const openModal = (index) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    // Fermer la modale
    const closeModal = () => setIsModalOpen(false);

    // Naviguer à l'image précédente
    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : filteredProjects.length - 1));
    };

    // Naviguer à l'image suivante
    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex < filteredProjects.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <section className={className}>
            <h1 className={`${classTitle} ${isVisible ? 'isvisible' : ''}`}>{title}</h1>
            <div className={`all ${isVisible ? 'isvisible' : ''}`}> 
            {filteredProjects.map((project, index) => (
                <article key={index} className={classProject}>
                    <img
                        src={`${process.env.REACT_APP_URL_BACKEND}/images/${project.imageUrl}`}  
                        alt={project.name}
                        onClick={() => openModal(index)} // Ouvre la modale
                        className="clickable-image"
                    />
                </article>
            ))}
            </div>

            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={(e) => { e.stopPropagation(); closeModal(); }}>&times;</span>
                    {filteredProjects[currentIndex] && (
                        <div className="modal-content">
                            <img
                                src={`${process.env.REACT_APP_URL_BACKEND}/images/${filteredProjects[currentIndex].imageUrl}`}
                                alt={filteredProjects[currentIndex].name}
                                className="modal-image"
                            />
                            <div className="caption">
                                {currentIndex + 1} / {filteredProjects.length}
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
