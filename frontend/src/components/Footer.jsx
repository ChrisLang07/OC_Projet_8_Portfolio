import { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import Content from '../components/Content';
import '../assets/scss/components/Footer.scss';

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [policyContent, setPolicyContent] = useState('');
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);

    const footerClass1 = "footer-content";
    const footerClass2 = "footer-text";
    const footerText = (
        <>
            <strong>© 2024 | Christophe LANGLOIS | </strong>Tous droits réservés.
            <br />
            <span
                role="button"
                tabIndex="0"
                onClick={() => setIsModalOpen(true)}
                onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
            >
                Politique de confidentialité
            </span>
        </>
    );

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    };

    useEffect(() => {
        const policyUrl = process.env.REACT_APP_URL_POLICY_CONTENT;
        fetch(policyUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement de la politique de confidentialité');
                }
                return response.text();
            })
            .then((text) => setPolicyContent(text))
            .catch((error) => {
                console.error('Erreur de chargement:', error);
                setPolicyContent('Impossible de charger la politique de confidentialité.');
            });
    }, []);

    useEffect(() => {
        if (isModalOpen) {
            closeButtonRef.current.focus();
        }
    }, [isModalOpen]);

    return (
        <>
            <div className="container footer">
                <Content class1={footerClass1} class2={footerClass2} text={footerText} />
            </div>

            {isModalOpen && (
                <>
                    <div 
                        className="modal-overlay" 
                        onClick={closeModal} 
                        role="presentation"
                        tabIndex={-1}
                    ></div>
                    <div 
                        className="footer-modal" 
                        ref={modalRef} 
                        tabIndex={-1}
                        onKeyDown={handleKeyDown}
                    >
                        <span 
                            className="close" 
                            onClick={closeModal}
                            ref={closeButtonRef}
                            role="button"
                            tabIndex="0"
                        >
                            &times;
                        </span>
                        <div className="modal-markdown">
                            <ReactMarkdown>{policyContent}</ReactMarkdown>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
