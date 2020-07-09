import styles from './Question.module.scss';

import YesImg from '../../assets/img/yes.svg';
import NoImg from '../../assets/img/no.svg';

const Question = () => {
    return (
        <div className={styles.question}>
            <h1>Is your budget over $10k USD?</h1>
            <div className={styles.note}>Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.</div>
            <div className={styles.answer}>
                <div className={styles.answer__option} tabIndex={0}>
                    <div className={styles.img}>
                        <img src={YesImg} alt="yes" />
                    </div>
                    <div>Yes</div>
                </div>
                <div className={styles.answer__option} tabIndex={0}>
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