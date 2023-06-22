import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SearchInput from '@/components/SearchInput';
import Pagination from '@/components/Pagination';
import Characters from '@/pages/Home/components/Characters';
import { useCharacters } from '@/pages/Home/Home.queries';
import styles from '@/pages/Home/Home.module.css';

const Home = () => {
    const [page, setPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const { data, error, loading } = useCharacters(page, searchTerm);

    const response = data?.characters;
    const characters = response?.results || [];
    const info = response?.info || {};
    const pageCount = info.pages || 0;

    useEffect(() => setPage(0), [searchTerm]);

    const handleChange = (value: string) => setSearchTerm(value);

    const handlePageClick = (selectedItem: { selected: number }) =>
        setPage(selectedItem.selected);
    return (
        <>
            <Helmet>
                <title>Rick and Morty - Characters</title>
            </Helmet>
            <SearchInput onChange={handleChange} />
            {!!characters.length && <Characters characters={characters} />}
            {!loading && !characters.length && (
                <div className={styles.warning}>No characters found</div>
            )}
            {!!error && (
                <div className={styles.warning}>Something went wrong</div>
            )}
            {pageCount > 1 && (
                <Pagination
                    className={styles.pagination}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    forcePage={page}
                />
            )}
        </>
    );
};

export default Home;
