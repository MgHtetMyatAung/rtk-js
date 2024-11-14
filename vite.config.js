import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), visualizer({ open: true })],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Separate React and React-DOM into their own chunk
            if (id.includes("react")) return "react-vendors";
            // Separate other large dependencies
            if (id.includes("lodash")) return "lodash-vendors";
            // Catch-all for remaining node_modules
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
