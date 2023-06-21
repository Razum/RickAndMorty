import classnames from 'classnames';
import type { CharacterType } from '@/pages/Home/Home.types';
import DeadStamp from '@/components/CharacterCard/components/DeadStamp';
import styles from '@/components/CharacterCard/CharacterCard.module.css';

interface CharacterCardProps {
    character: CharacterType;
    className?: string;
}

const CharacterCard = ({
    className,
    character: { gender, image, name, species, status }
}: CharacterCardProps) => {
    const isDead = status.toLowerCase() === 'dead';
    return (
        <div className={classnames(styles.card, className)}>
            <div className={styles.imageWrapper}>
                {isDead && <DeadStamp className={styles.stamp} />}
                <img
                    className={classnames(styles.image, {
                        [styles.isDead]: isDead
                    })}
                    src={image}
                    alt={name}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.label}>name:</div>
                <div className={styles.value}>{name}</div>
                <div className={styles.label}>species:</div>
                <div className={styles.value}>{species}</div>
                <div className={styles.label}>gender:</div>
                <div className={styles.value}>{gender}</div>
                <div className={styles.label}>status:</div>
                <div className={styles.value}>{status}</div>
            </div>
        </div>
    );
};

export default CharacterCard;
