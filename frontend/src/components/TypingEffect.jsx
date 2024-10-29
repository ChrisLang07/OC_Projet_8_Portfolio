import { useEffect, useRef } from "react";
import Typed from "typed.js";
import '../assets/scss/components/TypingEffect.scss';

export default function TypingEffect() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Christophe LANGLOIS | Développeur Web"],
      typeSpeed: 100,
      backSpeed: 0,         
      backDelay: 5000,      
      loop: true,
      loopCount: Infinity,
      cursorChar: "|"
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="typing-effect">
      <h1 className="typing-area">
        {" "}
        <span className="typing-area--text" ref={el} />{" "}
      </h1>
    </div>
  );
};