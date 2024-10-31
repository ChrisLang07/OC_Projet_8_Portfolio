import Content from '../components/Content';
import '../assets/scss/components/About.scss';

export default function About() {
    const aboutClass1 = 'about-content';
    const aboutClass2 = 'about-text';
    const aboutText = (
        <>
        Originaire de Châteauroux, au cœur du Berry dans la région Centre-Val de Loire,
        je suis passionné par les technologies du web.<br /><br />
        Toujours curieux et à l'affût des dernières innovations, j'aime explorer les nouvelles tendances
        digitales et les intégrer dans mes projets.<br />
        En parallèle de ma passion pour le web, je suis également un grand adepte du sport, en particulier
        des disciplines d'endurance.<br /><br />
        La rigueur et la persévérance que je cultive dans mes défis sportifs se reflètent aussi dans ma vie professionnelle,
        où <strong>l'engagement et la détermination sont mes maîtres mots.</strong>
        </>
    );
                        
  

    return (
        <div className="container about">
            <h1 className='about-title'>About me |</h1>
            <Content class1={aboutClass1} class2={aboutClass2} text={aboutText}/>
        </div>
    )
};