export default function Content({class1, class2, text }) {
    return (
        <div className={class1}>
            <p className={class2}>{text}</p>
        </div>
    )
};