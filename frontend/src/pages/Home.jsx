import { useEffect, useState } from 'react';
import TypingEffect from '../components/TypingEffect';
import Content from '../components/Content';
import ArrowDown from '../components/ArrowDown';
import Projects from '../components/Projects';
import '../assets/scss/Main.scss';
import '../assets/scss/components/Home.scss';

export default function Home() {
  const[isFixed, setIsFixed] = useState(false);
  
  // Déclaration des classes et contenus pour les sections "Projets"
  const projectsClass1 = 'projects-one--content';
  const projectsClass2 = 'projects-two--content';
  const classOne = 'project-one'; 
  const titleOne = ( <>Project Sophie Bluel |<strong> HTML5 * CSS3 * JavaScript</strong></>); 
  const urlProjects = process.env.REACT_APP_URL_PROJECTS; 
  const projectNumberOne = "1"; 
  const projectNumberTwo = "2"; 

  const projectClass1 = 'project-one--text';
  const projectClass2 = 'project-two--text'; 
  const classTwo = 'project-two'; 
  const titleTwo = ( <>Project Mon vieux grimoire |<strong> React * Node.js * Express.js * MongoDB</strong></>); // Titre du deuxième projet

  // Déclaration des classes et du texte pour la section "Home"
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
  ); // Bloc de texte de présentation

  const projectTextOne = (
    <>
    Dans ce projet, j'ai créé une page web dynamique en utilisant HTML5, CSS3 et JavaScript. 
    L'objectif était de rendre la page interactive, par exemple en permettant à l'utilisateur d'interagir 
    avec différents éléments de la page. Une difficulté que j'ai rencontrée était de gérer les actions des utilisateurs, 
    comme les clics ou les saisies, et de mettre à jour le contenu de la page en conséquence. 
    Pour y arriver, j'ai appris à utiliser les gestionnaires d'événements en JavaScript et à manipuler les éléments de la page (DOM).
     Ce projet m'a permis de mieux comprendre comment JavaScript fonctionne dans le navigateur et de développer des compétences 
     comme l'organisation de mon code pour le rendre plus clair et facile à modifier. 
     Cela m'a aussi aidé à gagner en confiance pour créer des fonctionnalités interactives sur une page web.
    </>
  ); // Bloc de texte concernant le premier projet

  const projectTexttwo = (
    <>
    Dans ce projet, j'ai développé le back-end d'un site de notation de livres en utilisant Express pour créer un serveur web 
    et MongoDB pour gérer la base de données. L'objectif principal était d'implémenter des opérations CRUD 
    (Créer, Lire, Mettre à jour, Supprimer) afin de permettre la gestion des livres et de leurs notations. 
    Une des difficultés rencontrées concernait la connexion au serveur MongoDB et la gestion des erreurs liées aux requêtes,
     notamment lorsqu'il s'agissait de valider les données reçues. Pour surmonter cela, j'ai utilisé Mongoose pour simplifier 
     les interactions avec la base de données et mis en place des validations et des messages d'erreur clairs. 
     Ce projet m'a permis de développer mes compétences en création d'API REST, en gestion de bases de données, 
     et en structuration de code back-end avec Node.js et Express. Cela m'a également appris à mieux sécuriser et 
     optimiser un serveur pour garantir sa robustesse et sa fiabilité.
    </>
  )

  useEffect(() => {
    const handleScroll = () => {
      let currentScrolly = window.scrollY;
      let lastScroll = 0;

      if (currentScrolly > lastScroll && currentScrolly >= window.innerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      lastScroll = currentScrolly;
      console.log(currentScrolly);
      console.log(lastScroll);
      console.log(window.innerHeight)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     {/* Section d'accueil avec l'animation de la flèche et le texte animé */}
      <div className="container home">
        <ArrowDown />
        <TypingEffect />
        <Content class1={class1} class2={class2} text={text1} />
      </div>

      {/* Première section des projets */}
      <div className={`container projects-one ${isFixed ? 'isFixed' : ''} `}>
         
         {/* Affichage du premier projet avec ses détails */}
        <Projects
          className={classOne}
          classTitle="project-one--title"
          projectTitle={titleOne}
          classProject="project-one--image"
          jsonUrl={urlProjects}
          projectNumber={projectNumberOne}
        />

        {/* Affichage du paragraphe */}
        <Content
          class1={projectsClass1}
          class2={projectClass1}
          text={projectTextOne}
        />
      </div>
      
      {/* Deuxième section des projets */}
      <div className="container projects-two">
         
         {/* Affichage du deuxième projet avec ses détails */}
        <Projects
          className={classTwo}
          classTitle="project-two--title"
          projectTitle={titleTwo}
          classProject="project-two--image"
          jsonUrl={urlProjects}
          projectNumber={projectNumberTwo}
        />

        {/* Affichage du paragraphe */}
        <Content
          class1={projectsClass2}
          class2={projectClass2}
          text={projectTexttwo}
        />
      </div>
    </>
  );
};
