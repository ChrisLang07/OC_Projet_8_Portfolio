import { useEffect, useRef } from "react";
import Typed from "typed.js";
import '../assets/scss/TypingEffect.scss';

export default function TypingEffect() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Christophe LANGLOIS | Développeur Web"],
      typeSpeed: 100,
      backSpeed: 0,         // Vitesse d'effacement
      backDelay: 5000,       // Délai avant l'effacement (en ms)
      loop: true,
      loopCount: Infinity,
      cursorChar: "|"
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <h1 className="typing-area">
        {" "}
        <span className="typing-area--text" ref={el} />{" "}
      </h1>
    </div>
  );
};