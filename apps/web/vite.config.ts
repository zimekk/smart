import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// const port = 5173;

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  clearScreen: false,
  plugins: [react()],
  server: {
    // port,
  },
});
