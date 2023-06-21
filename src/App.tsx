import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import styles from '@/App.module.css';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className={styles.main}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
