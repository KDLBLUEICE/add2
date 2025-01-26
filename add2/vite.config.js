import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

const baseURL = '/KDLBLUEICE/add2'; // Ensure this is correct

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    server: {
        port: 59887,
    },
});
