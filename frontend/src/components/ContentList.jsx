import { useEffect, useState } from "react"

export default function ContentList({ class1, class2, class3, class4, class5, text }) {
    const [skills, setSkills] = useState([]); 
    const url = '/data/skills.json';

    // Récupération de la liste des Skills
    useEffect(() => {
        fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            setSkills(data);
        })
        .catch((error) => {
            console.error("Une erreur est survenue:", error);
        })

    }, []);

    return (
        <div className={class1}>
            <p className={class3}>{text}</p>
            <ul className={class4}>
            {skills.map((skillObj, index) => (
                    Object.entries(skillObj).map(([key, value]) => (
                        <li key={index} className={class5}> 
                            <strong>{key}:</strong> {value}
                        </li>
                    ))
                ))}
            </ul>
        </div>
    )
};