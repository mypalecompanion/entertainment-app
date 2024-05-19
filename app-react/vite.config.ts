import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    host: true,
    watch: {
      usePolling: true,
    },
  },
  // server: {
  //   host: true,
  //   port: 8000,
  //   watch: {
  //     usePolling: true,
  //   },
  // },
});
