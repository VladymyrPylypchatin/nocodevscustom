import styles from './Footer.module.scss';
import TagManager from 'react-gtm-module';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__madeBy}>
                made by <a onClick={() => {
                    TagManager.dataLayer({
                        dataLayer: {
                            event: 'OpenMaker',
                        }
                    })
                }} href="https://twitter.com/VPilipchatin" target="_blank">Vova Pilipchatin</a> a digital product engineer
            </div>
        </footer>
    );
};

export default Footer;