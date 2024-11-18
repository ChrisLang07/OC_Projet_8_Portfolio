import { useEffect, useState } from 'react';
import '../assets/scss/components/Contact.scss';

export default function Contact() {
    // Déclaration des états pour gérer les données du formulaire
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [error, setError] = useState(null);  // Erreur d'envoi du formulaire
    const [success, setSuccess] = useState(null);  // Message de succès après envoi
    const [showSuccess, setShowSuccess] = useState(false); // Détermine si le message de succès doit être affiché
    const [isLoading, setIsLoading] = useState(false); // Détermine si l'envoi est en cours

    // Gestion des changements dans les champs du formulaire
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);  // Set isLoading to true

        try {
            // Envoi de la requête POST vers l'API backend pour envoyer le message de contact
            const response = await fetch('http://localhost:4000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Vérification si la réponse de l'API est correcte
            if (!response.ok) {
                throw new Error('Erreur lors de l\'envoi du message');
            }
            
            setSuccess('Message envoyé avec succès !');
            setShowSuccess(true);
            setFormData({ name: "", email: "", message: "" }); 
            setError(null);  
        } catch (error) {
            setError(error.message);
            setSuccess(null);  
        } finally {
            setIsLoading(false);  // Set isLoading to false
        }
    };

     // Fonction pour fermer le message de succès d'envoi du message
    const handleCloseSuccess = () => {
        setShowSuccess(false);
        setSuccess(null);
    };

    // Déclaration d'un état pour gérer l'affichage du formulaire (animation de visibilité)
    const[isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true); // Affiche le formulaire avec une animation après que le composant soit rendu

    }, []);

    return (
        <div className="container contact">
            {/* Formulaire de contact */}
            <form className="form" onSubmit={handleSubmit}>
                <h1 className={`form-title ${isVisible? 'visible' : ''}`}>Contact |</h1>
                <div className={`form-content ${isVisible? 'visible' : ''}`}>
                    <div className="form-input">
                        <label className="form-label" htmlFor="name">Nom |</label>
                        <input
                            className="form-input--box"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Champ de saisi de l'email */}
                    <div className="form-input">
                        <label className="form-label" htmlFor="email">E-mail |</label>
                        <input
                            className="form-input--box"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Champ de saisi pour le message */}
                    <div className="form-message">
                        <label className="form-label" htmlFor='message'>Message |</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* bouton d'envoi du formulaire */}
                    <div className="form-submit">
                        <button className="form-submit--button" type="submit" disabled={isLoading}>
                            {isLoading ? 'Envoi en cours...' : 'Envoyer'}
                        </button>
                        {isLoading && <div className="loading-spinner"></div>}
                    </div>

                    {/* Message de succès après soumission */}
                    {showSuccess && (
                    <div className="success-message">
                        {success}
                        <button onClick={handleCloseSuccess} className="close-button">
                            Fermer
                        </button>
                    </div>
                )}
                </div>
                {error && <div className="error-message">{error}</div>}
                
            </form>
        </div>
    );
}
