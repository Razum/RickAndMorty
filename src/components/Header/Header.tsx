import styles from '@/components/Header/Header.module.css';
import rick from '@/assets/images/rick.webp';
import morty from '@/assets/images/morty.webp';

const IMAGE_SIZE = 100;

const Header = () => {
    return (
        <header className={styles.header}>
            <img
                className={styles.rick}
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
                src={rick}
                alt="Rick Sanchez"
            />
            <h1 className={styles.title}>Rick and Morty</h1>
            <img
                className={styles.morty}
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
                src={morty}
                alt="Morty Smith Sanchez"
            />
        </header>
    );
};

export default Header;
