import classnames from 'classnames';
import type { CharacterType } from '@/pages/Home/Home.types';
import styles from '@/components/CharacterCard/CharacterCard.module.css';

interface CharacterCardProps {
    character: CharacterType;
    className?: string;
}

const CharacterCard = ({
    className,
    character: { image, name }
}: CharacterCardProps) => {
    return (
        <div className={classnames(styles.card, className)}>
            <img className={styles.image} src={image} alt={name} />
        </div>
    );
};

export default CharacterCard;
