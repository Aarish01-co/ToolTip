import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Or however your tailwind is imported
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // 👇 Comment out this entire build block for Vercel deployments 👇
  /* 
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "EaseUI",
      fileName: (format) => `easeui.${format}.js`,
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  */
});