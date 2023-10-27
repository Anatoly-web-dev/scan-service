import styles from './Loader.module.css';

export function Loader({mode}) {
    return (
        <div className={`${styles.loader} ${mode ? styles[mode] : ''}`}>
            <img src="./images/loader.svg" alt="" />
        </div>
    );
}
