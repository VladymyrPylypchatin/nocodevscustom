import styles from './QuestionLayout.module.scss';
import LayoutBase from '../LayoutBase/LayoutBase';

const QuestionLayout = (props) => {
    return (
        <LayoutBase>
            <header>Header</header>
            <main className={styles.main}>
                {props.children}
            </main>
            <footer>Footer</footer>
        </LayoutBase>

    );
}

export default QuestionLayout; 