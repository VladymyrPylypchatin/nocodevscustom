import styles from './Layout.module.scss';

const Layout = (props) => {


    return (
        <div className={styles.gradient}>
            <div className={styles.wrapper}>
                {props.children}
            </div>
        </div>
    );
}

export default Layout; 