import { useEffect, useState } from 'react';
import ContentList from '../components/ContentList';
import '../assets/scss/components/Skills.scss';

export default function Skills() {
    // Définition des classes CSS utilisées dans ce composant
    const skillsClass1 = 'skills-content';
    const skillsClass2 = 'skills-title';
    const skillsClass3 = 'skills-text';
    const skillsClass4 = 'skills-list'
    const skillsClass5 = 'skills-item'

     // Texte introductif de la section compétences
    const skillsText = (
        <>
        En tant que développeur passionné, j'ai acquis une solide expérience dans plusieurs technologies
        essentielles au développement web. Mon expertise comprend une maîtrise des langages de programmation,
        ainsi que des frameworks modernes qui me permettent de créer des applications robustes et performantes.<br /><br />
        <strong>Voici un aperçu de mes compétences:</strong> 
        </>
    );

     // Déclaration d'un état pour gérer la visibilité de l'animation
    const[isVisble, setIsVisible] = useState(false);

    // Utilisation de useEffect pour déclencher l'animation de visibilité lors du premier rendu du composant
    useEffect(() => {
        setIsVisible(true);
    }, []);

                        
  

    return (
      <div className="container skills">
        {/* Titre de la section avec une animation conditionnelle */}
        <h1 className={`skills-title ${isVisble ? "visible" : ""}`}>
          Skills |
        </h1>

        {/* Contenu de la liste des compétences, avec l'animation conditionnelle */}
        <ContentList
          class1={skillsClass1}
          class2={`${skillsClass2} ${isVisble ? "visible" : ""}`}
          class3={`${skillsClass3} ${isVisble ? "visible" : ""}`}
          class4={`${skillsClass4} ${isVisble ? "visible" : ""}`}
          class5={skillsClass5}
          text={skillsText}
        />
      </div>
    );
};