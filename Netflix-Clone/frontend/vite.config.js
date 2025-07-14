import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 🔑 Required so Vite listens on all interfaces inside the container
    port: 5173,      // 🔑 Must match docker-compose exposed port
    proxy: {
      "/api": {
        target: "http://backend:5000", // 🔑 Use Docker service name, NOT localhost
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
