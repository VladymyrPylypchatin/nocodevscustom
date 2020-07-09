import styles from './Layout.module.scss';
import LayoutBase from '../LayoutBase/LayoutBase';

const Layout = (props) => {
    return (
        <LayoutBase>
            <main className={styles.main}>
                {props.children}
            </main>
        </LayoutBase>
    );
}

export default Layout; 