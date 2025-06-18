import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: true, // Allows access from other devices on the network
    port: 5173, // Default Vite port
    strictPort: true, // Fail if port is already in use
    proxy: {
      "/api": {
        target: "http://localhost:4000", // Your backend API URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
