import styles from './Layout.module.scss';
import LayoutBase from '../LayoutBase/LayoutBase';
import Footer from '../Footer/Footer';
import SocialShare from '../SocialShare/SocialShare';


const Layout = (props) => {
    return (
        <LayoutBase>
            <header className={styles.header}>
                <SocialShare />
            </header>
            <main className={styles.main}>
                {props.children}
            </main>
            <Footer />
        </LayoutBase>
    );
}

export default Layout; 