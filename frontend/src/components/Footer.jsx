import Content from '../components/Content';
import '../assets/scss/Footer.scss';

export default function Footer() {
    const footerClass1 = "footer-content";
    const footerClass2 = "footer-text";
    const footerText = (
        <>
        <strong>© 2024 | Christophe LANGLOIS | </strong>Tous droits réservés.<br />Politique de confidentialité <strong>-</strong> Conditions d'utilisation
        </>
    )

    return (
        <div className='container footer'>
            <Content class1={footerClass1} class2={footerClass2} text={footerText} />
        </div>
    )
};