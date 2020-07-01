import styles from './Layout.module.scss';

const Layout = (props) => {
    return (
        <div className={styles.gradient}>
            <div className={styles.wrapper}>
                <main className={styles.layout}>
                    {props.children}
                </main>
            </div>
        </div>
    );
}

export default Layout; 