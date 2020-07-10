import styles from './Main.module.scss';
import Button from '../../components/UI/Button/Button';
import { useRouter } from 'next/router';
import TagManager from 'react-gtm-module';

import IllustrationImg from '../../assets/img/illustration.svg';


const Main = () => {
    const router = useRouter();
    return (
        <div className={styles.main}>
            <img src={IllustrationImg} alt="no-code vs custom software" />
            <h1>No-code vs Custom development?</h1>
            <h2>
                Wondering what to chose, no-code tool, or hire a developer for launching your SaaS business?  I can help you to make a decision.
            </h2>
            <Button onClick={() => {
                TagManager.dataLayer({
                    dataLayer: {
                        event: 'StartQuiz',
                    }
                })
                router.push('/question');
            }}>Find out what you need</Button>
        </div>
    );
};

export default Main;