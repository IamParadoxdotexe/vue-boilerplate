import vue from '@vitejs/plugin-vue';

export default {
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/_global.scss";`
      }
    }
  },
  server: {
    port: 8080
  }
};
