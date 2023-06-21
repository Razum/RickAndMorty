import CharacterCard from '@/components/CharacterCard';
import type { CharacterType } from '@/pages/Home/Home.types';
import styles from '@/pages/Home/components/Characters/Characters.module.css';

interface CharactersProps {
    characters: CharacterType[];
}

const Characters = ({ characters }: CharactersProps) => {
    return (
        <div className={styles.grid}>
            {characters.map((character: CharacterType) => (
                <CharacterCard character={character} key={character.id} />
            ))}
        </div>
    );
};

export default Characters;
