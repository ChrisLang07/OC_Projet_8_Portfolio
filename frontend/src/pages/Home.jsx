import TypingEffect from '../components/TypingEffect';
import Content from '../components/Content';
import '../assets/scss/Main.scss';
import '../assets/scss/Home.scss';

export default function Home() {
    const class1 = 'home-content';
    const class2 = 'home-text';
    const text = (
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

    return (
      <div className="container home">
        <div className="arrow">
          <div className="arrow-line"></div>
          <div className="arrow-head">V</div>
        </div>

        <TypingEffect />
        <Content class1={class1} class2={class2} text={text} />
      </div>
    );
};