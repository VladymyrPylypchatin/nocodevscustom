import styles from './SocialShare.module.scss';
import {
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from 'react-share';

const SocialShare = () => {

    return (
        <div className={styles.socials}>
            <TwitterShareButton
                url={`https://nocodevscustom.vercel.app/`}
                title={`👉 Should you use a no-code tool or hire a developer? Find out in less than a minute. Made by @VPilipchatin`}
                hashtags={[`nocode`, `saas`, `startup`, `startupjourney`, `bootstraping`]}
            >
                <div className={[styles.twitter, styles.btn].join(' ')}>
                    <TwitterIcon
                        size={23}
                    />
                </div>
            </TwitterShareButton>

            <LinkedinShareButton
                url={`https://nocodevscustom.vercel.app/`}
                title={`Should you use a no-code tool or hire a developer? Find out in less than a minute. Made by @VPilipchatin`}
                summary={`Should you use a no-code tool or hire a developer? Find out in less than a minute. Made by @VPilipchatin`}
            >
                <div className={[styles.linkedin, styles.btn].join(' ')}>

                    <LinkedinIcon
                        size={23}
                    />
                </div>
            </LinkedinShareButton>
        </div>
    );
}

export default SocialShare;