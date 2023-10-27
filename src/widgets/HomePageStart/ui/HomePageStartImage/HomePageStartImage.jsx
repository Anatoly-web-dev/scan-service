import styles from './HomePageStartImage.module.css';
import {AdaptiveImage} from '/src/shared';

export function HomePageStartImage() {
    return (
        <div className={styles['home-page-start__image']}>
            <AdaptiveImage src="./images/home-image.svg" alt="home" />
        </div>
    );
}
