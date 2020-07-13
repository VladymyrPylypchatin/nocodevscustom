import styles from './QuestionLayout.module.scss';
import LayoutBase from '../LayoutBase/LayoutBase';
import { useRouter } from 'next/router';
import Footer from '../Footer/Footer';

import LoaderImg from '../../assets/img/loading.svg';

const QuestionLayout = (props) => {
    const router = useRouter();

    let content = props.children;
    if (props.isLoading) content = <div className={styles.loader}><img src={LoaderImg} alt="Loading..." /></div>

    return (
        <LayoutBase isLoading={props.isLoading}>
            <header className={styles.header}>
                <div className={styles.back} onClick={() => router.replace(`/`)}>
                    {`<`} START AGAIN
                </div>
            </header>
            <main className={styles.main}>
                {content}
            </main>
            <Footer />
        </LayoutBase>

    );
}

export default QuestionLayout; 