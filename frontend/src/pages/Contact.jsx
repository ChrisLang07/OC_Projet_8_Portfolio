import { useState } from 'react';
import '../assets/scss/components/Contact.scss';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [error, setError] = useState(null);  
    const [success, setSuccess] = useState(null);  
    const [showSuccess, setShowSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('https://portfolio-backend-98ya.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de l\'envoi du message');
            }
            
            setSuccess('Message envoyé avec succès !');
            setShowSuccess(true); // Afficher le message de succès
            setFormData({ name: "", email: "", message: "" }); 
            setError(null);  
        } catch (error) {
            setError(error.message);
            setSuccess(null);  
        } finally {
            setIsLoading(false);
        }
    };

    
    const handleCloseSuccess = () => {
        setShowSuccess(false);
        setSuccess(null);
    };

    return (
        <div className="container contact">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="form-title">Contact |</h1>
                <div className="form-content">
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
                    <div className="form-submit">
                        <button className="form-submit--button" type="submit" disabled={isLoading}>
                            {isLoading ? 'Envoi en cours...' : 'Envoyer'}
                        </button>
                    </div>
                </div>
                {error && <div className="error-message">{error}</div>}
                {showSuccess && (
                    <div className="success-message">
                        {success}
                        <button onClick={handleCloseSuccess} className="close-button">
                            Fermer
                        </button>
                    </div>
                )}
                {isLoading && <div className="loading-message">Chargement...</div>} {/* Message de chargement */}
            </form>
        </div>
    );
}
