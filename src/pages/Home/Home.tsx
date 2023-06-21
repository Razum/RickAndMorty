import { useEffect, useState } from 'react';
import SearchInput from '@/components/SearchInput';
import Pagination from '@/components/Pagination';
import Characters from '@/pages/Home/components/Characters';
import { useCharacters } from '@/pages/Home/Home.queries';
import styles from '@/pages/Home/Home.module.css';

const Home = () => {
    const [page, setPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const { data } = useCharacters(page, searchTerm);

    const response = data?.characters;
    const characters = response?.results || [];
    const info = response?.info || {};

    useEffect(() => setPage(0), [searchTerm]);

    const handleChange = (value: string) => setSearchTerm(value);

    const handlePageClick = (selectedItem: { selected: number }) =>
        setPage(selectedItem.selected);
    return (
        <>
            <SearchInput onChange={handleChange} />
            <Characters characters={characters} />
            <Pagination
                className={styles.pagination}
                pageCount={info.pages || 0}
                onPageChange={handlePageClick}
                forcePage={page}
            />
        </>
    );
};

export default Home;
