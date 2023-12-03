import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        proxy: {
            "/api": {
                target: process.env.RENDER_URL || process.env.PORT,
                changeOrigin: true,
                secure: false,
            },
        },
    },
});

