import styles from './Answer.module.scss';


const Answer = ({ header, text }) => {
    return (
        <div className={styles.answer}>
            <h1>{header}</h1>
            {text.split('\n').map((t, i) => <p key={i}>{t}</p>)}
        </div>
    );
};

export default Answer;