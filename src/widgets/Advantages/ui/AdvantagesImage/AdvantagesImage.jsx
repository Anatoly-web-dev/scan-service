import styles from './AdvantagesImage.module.css';
import {AdaptiveImage} from '/src/shared';

export function AdvantagesImage() {
    return (
        <div className={styles.advantages__image}>
            <AdaptiveImage src="./images/advantages-image.svg" />
        </div>
    );
}
