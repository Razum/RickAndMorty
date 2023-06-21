/* eslint-disable import/no-extraneous-dependencies */
// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import svgr from '@svgr/rollup';
import autoprefixer from 'autoprefixer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        checker({ typescript: true }),
        svgr({ icon: true, typescript: true, svgo: true })
    ],
    css: {
        postcss: {
            plugins: [autoprefixer()]
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
});
