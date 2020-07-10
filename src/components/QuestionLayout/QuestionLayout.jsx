import styles from './QuestionLayout.module.scss';
import LayoutBase from '../LayoutBase/LayoutBase';
import { useRouter } from 'next/router';

const QuestionLayout = (props) => {
    const router = useRouter();

    return (
        <LayoutBase>
            <header className={styles.header}>
                <div className={styles.back} onClick={() => router.replace(`/`)}>
                    {`<`} START AGAIN
                </div>
            </header>
            <main className={styles.main}>
                {props.children}
            </main>
            <footer>Footer</footer>
        </LayoutBase>

    );
}

export default QuestionLayout; 