import ContentList from '../components/ContentList';
import '../assets/scss/components/Skills.scss';

export default function Skills() {
    const skillsClass1 = 'skills-content';
    const skillsClass2 = 'skills-title';
    const skillsClass3 = 'skills-text';
    const skillsClass4 = 'skills-list'
    const skillsClass5 = 'skills-item'
    const skillsText = (
        <>
        En tant que développeur passionné, j'ai acquis une solide expérience dans plusieurs technologies
        essentielles au développement web. Mon expertise comprend une maîtrise des langages de programmation,
        ainsi que des frameworks modernes qui me permettent de créer des applications robustes et performantes.<br /><br />
        <strong>Voici un aperçu de mes compétences:</strong> 
        </>
    );
                        
  

    return (
        <div className="container skills">
            <h1 className="skills-title">Skills |</h1>
            <ContentList class1={skillsClass1} class2={skillsClass2} class3={skillsClass3} class4={skillsClass4} class5={skillsClass5} text={skillsText}/>
        </div>
    )
};