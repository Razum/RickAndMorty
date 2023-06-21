import { useId, useState } from 'react';
import useDebounce from 'react-use/lib/useDebounce';
import { ReactComponent as SearchIcon } from '@/assets/svg/search.svg';
import styles from '@/components/SearchInput/Searchinput.module.css';

interface SearchInputProps {
    timeout?: number;
    onChange: (value: string) => void;
}

const SearchInput = ({ onChange, timeout = 500 }: SearchInputProps) => {
    const [value, setValue] = useState('');
    const id = useId();

    useDebounce(
        () => {
            onChange(value);
        },
        timeout,
        [value]
    );
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setValue(event.target.value);
    return (
        <div>
            <label htmlFor={id} className={styles.label}>
                Search
            </label>
            <div className={styles.wrapper}>
                <input
                    id={id}
                    type="text"
                    value={value}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Start typing here..."
                />
                <SearchIcon className={styles.icon} />
            </div>
        </div>
    );
};

export default SearchInput;
