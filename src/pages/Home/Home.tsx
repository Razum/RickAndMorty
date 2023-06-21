import { useState } from 'react';
import { useCharacters } from '@/pages/Home/Home.queries';

const Home = () => {
    const [page, setPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const { loading, error, data } = useCharacters(page, searchTerm);
    console.log(data, error);
    return <div>Home</div>;
};

export default Home;
