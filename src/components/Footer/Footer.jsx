import styles from './Footer.module.scss';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__madeBy}>
                made by <a href="https://twitter.com/VPilipchatin" target="_blank">Vova Pilipchatin</a> a digital product engineer
            </div>
        </footer>
    );
};

export default Footer;