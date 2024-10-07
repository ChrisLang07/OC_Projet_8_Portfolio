import Content from '../components/Content';
import '../assets/scss/Footer.scss';

export default function Footer() {
    const footerText = "Tous droits réservés. | Politique de confidentialité | Conditions d'utilisation";
    const footerClass1 = "footer-content";
    const footerClass2 = "footer-title";
    const footerClass3 = "footer-text";
    const footerTitle = "© 2024 Christophe | LANGLOIS"

    return (
        <div className='container footer'>
            <Content class1={footerClass1} class2={footerClass2} class3={footerClass3} text={footerText} title={footerTitle}/>
        </div>
    )
};