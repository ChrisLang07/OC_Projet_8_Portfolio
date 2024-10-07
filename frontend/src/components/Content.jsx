export default function Content({class1, class2, class3, title, text }) {
    return (
        <div className={class1}>
            <h1 className={class2}>{title}</h1>
            <p className={class3}>{text}</p>
        </div>
    )
};