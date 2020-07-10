import styles from './Question.module.scss';

import YesImg from '../../assets/img/yes.svg';
import NoImg from '../../assets/img/no.svg';

const Question = ({ question, note, onYes, onNo }) => {
    return (
        <div className={styles.question}>
            <h1>{question}</h1>
            <div className={styles.note}>{note}</div>
            <div className={styles.answer}>
                <div className={styles.answer__option} tabIndex={0} onClick={onYes}>
                    <div className={styles.img}>
                        <img src={YesImg} alt="yes" />
                    </div>
                    <div>Yes</div>
                </div>
                <div className={styles.answer__option} tabIndex={0} onClick={onNo}>
                    <div className={styles.img}>
                        <img src={NoImg} alt="No" />
                    </div>
                    <div>No</div>
                </div>
            </div>
        </div>
    );
};

export default Question;