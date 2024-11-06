import { useEffect, useState } from 'react';
import '../assets/scss/components/Projects.scss';

export default function Projects({className, classTitle, title, classProject}) {
    const[isVisible, setIsVisible] = useState(false);
    let lastScrollY = 0;
    

    const handleScrolly = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        
        lastScrollY = currentScrollY;
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrolly);

        return () => {
            window.removeEventListener('scroll', handleScrolly);
    }
    },);

    return (
        <section className={className}>
            <h1 className={`${classTitle} ${isVisible? 'isVisible' : ''}`}>{title}</h1>
            <article className={`${classProject} ${isVisible? 'isVisible' : ''}`}></article>
            <article className={`${classProject} ${isVisible? 'isVisible' : ''}`}></article>
            <article className={`${classProject} ${isVisible? 'isVisible' : ''}`}></article>
        </section>
    )
}