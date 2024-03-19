import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// vite.config.js
import { resolve } from "path";
import dts from "vite-plugin-dts";
//配置库模式，打包的核心
export default defineConfig({
  plugins: [vue(), dts({ include: "./lib" })],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "Demo",
      // the proper extensions will be added
      fileName: "Demo",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
