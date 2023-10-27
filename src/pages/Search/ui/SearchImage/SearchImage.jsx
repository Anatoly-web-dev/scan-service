import styles from './SearchImage.module.css';
import {AdaptiveImage} from '/src/shared';

export function SearchImage() {
    return (
        <div className={styles.search__image}>
            <AdaptiveImage src="./images/search-image.svg" />
        </div>
    );
}
