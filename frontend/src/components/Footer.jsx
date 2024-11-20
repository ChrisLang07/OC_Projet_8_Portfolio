import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Content from '../components/Content';
import '../assets/scss/components/Footer.scss';

export default function Footer() {
    const[isModalOpen, setIsModalOpen] = useState(false);
    const [policyContent, setPolicyContent] = useState('');

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
        <strong>*</strong> Conditions d'utilisation
      </>
    );

    const closeModal= () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const policyUrl = process.env.REACT_APP_URL_POLICY_CONTENT
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


    return (
        <>
        <div className='container footer'>
            <Content class1={footerClass1} class2={footerClass2} text={footerText} />
        </div>

        {isModalOpen && (
                    <>
                        <div className="modal-overlay" onClick={closeModal}></div>
                        <div className="footer-modal">
                            <span className="close" onClick={closeModal}>
                                &times;
                            </span>
                            <div className="modal-markdown">
                                <ReactMarkdown>{policyContent}</ReactMarkdown>
                            </div>
                        </div>
                    </>
                )}
        </>
    )
};