import TypingEffect from '../components/TypingEffect';
import Content from '../components/Content';
import ArrowDown from '../components/ArrowDown';
import Projects from '../components/Projects';
import '../assets/scss/Main.scss';
import '../assets/scss/components/Home.scss';

export default function Home() {
  const projectsClass1 = 'projects-content';
  const classOne = 'project-one';
  const titleOne = ( <>Project Sophie Bluel |<strong> HTML5 * CSS3 * JavaScript</strong></>);
  const urlProjects = process.env.REACT_APP_URL_PROJECTS;
  const projectNumberOne = "1";
  const projectNumberTwo = "2";

  const projectClass2 = 'projects-text';
  const classTwo = 'project-two';
  const titleTwo = ( <>Project Mon vieux grimoire |<strong> React * Node.js * Express.js * MongoDB</strong></>);
  const class1 = 'home-content';
  const class2 = 'home-text';
  const text1 = (
    <>
      Développeur web passionné spécialisé dans la création de sites et
      d'applications modernes et performants. Je maîtrise HTML, CSS,
      JavaScript (React.js, Node.js), et j'accorde une grande importance à
      l'expérience utilisateur et à l'accessibilité. Mon objectif est de
      proposer des solutions efficaces, optimisées et adaptées aux besoins de
      chaque projet. Je suis toujours prêt à relever de nouveaux défis et à
      continuer d'apprendre. Vous avez un projet en tête ? <br />
      <br />
      <strong>Contactez-moi, je serai ravi de collaborer avec vous !</strong>
    </>
  );
  const text2 = (
    <>
    J'ai réalisé plusieurs projets en utilisant mes compétences techniques en HTML5, CSS3 et JavaScript 
    pour le développement front-end, ainsi qu'en Node.js et Express.js pour construire des back-ends performants. 
    J'ai intégré des bases de données NoSQL avec MongoDB et créé des API RESTful pour gérer les interactions
    entre les différentes parties d'une application. 
    Grâce à l'utilisation de Git & GitHub, j'ai assuré un suivi rigoureux des versions. 
    Ces projets m'ont permis de renforcer ma maîtrise des technologies web modernes et de développer des solutions 
    complètes et évolutives.
    </>
  );

  return (
    <>
      <div className="container home">
        <ArrowDown />
        <TypingEffect />
        <Content class1={class1} class2={class2} text={text1} />
      </div>
      <div className="container projects">
        <Projects
          className={classOne}
          classTitle="project-one--title"
          title={titleOne}
          classProject="project-one--image"
          jsonUrl={urlProjects}
          projectNumber={projectNumberOne}
        />
        <Content
          class1={projectsClass1}
          class2={projectClass2}
          text={text2}
        />
        <Projects
          className={classTwo}
          classTitle="project-two--title"
          title={titleTwo}
          classProject="project-two--image"
          jsonUrl={urlProjects}
          projectNumber={projectNumberTwo}
        />
      </div>
    </>
  );
};
