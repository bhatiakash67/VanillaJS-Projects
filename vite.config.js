import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Add the projects here, for example:
        // project1: resolve(__dirname, 'src/project1/index.html'),
        // project2: resolve(__dirname, 'src/project2/index.html'),
        project1: resolve(__dirname, 'src/memoizing promises/index.html'),
        project2: resolve(__dirname, 'src/pro2/index.html'),
        // Add more projects here
      }
    }
  }
});