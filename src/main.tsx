import React from 'react';
import ReactDOM from 'react-dom/client';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import App from './App';
import '@/assets/styles/app.css';

const client = new GraphQLClient({
    url: 'https://rickandmortyapi.com/graphql'
});

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
    <React.StrictMode>
        <ClientContext.Provider value={client}>
            <App />
        </ClientContext.Provider>
    </React.StrictMode>
);
