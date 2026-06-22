import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        strictPort: false,
        allowedHosts: [
            'localhost',
            '127.0.0.1',
            'sb-49fcrn588ydl.vercel.run',
            '.vercel.run',
            '.vercel.app'
        ]
    }
});
