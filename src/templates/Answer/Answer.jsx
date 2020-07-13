import styles from './Answer.module.scss';
import TagManager from 'react-gtm-module';
import SocialShare from '../../components/SocialShare/SocialShare';
import { useEffect } from 'react';

const Answer = ({ header, text, resources }) => {
    useEffect(() => {
        TagManager.dataLayer({
            dataLayer: {
                event: 'FinishedQuiz',
            }
        })
    }, [])

    let resourcesList = null;
    if (resources) {
        resourcesList = (
            <div className={styles.answer__resources}>
                <h3>Useful resources</h3>
                <ul>
                    {resources.map(r => {
                        return (
                            <li>
                                <a href={r.url} target='_blank'>{r.title}</a>
                            </li>
                        );
                    })}

                </ul>
            </div>
        );
    }

    return (
        <div className={styles.answer}>
            <h1>{header}</h1>
            {text.split('\n').map((t, i) => <p key={i}>{t}</p>)}
            {resourcesList}
            <div className={styles.answer__footer}>
                <h3>Find this valuable? Please help spread the word.</h3>
                <div>
                    <SocialShare />
                </div>
            </div>
        </div>
    );
};

export default Answer;