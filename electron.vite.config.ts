import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        "@/lib": resolve("src/main/lib"),
        "@shared": resolve("src/shared")
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    assetsInclude: "src/renderer/assets/**",
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src"),
        "@shared": resolve("src/shared/src"),
        "@/hooks": resolve("src/renderer/src/hooks"),
        "@/asset": resolve("src/renderer/src/asset"),
        "@/components": resolve("src/renderer/src/components"),
        "@/store": resolve("src/renderer/src/store"),
        "@/mocks": resolve("src/renderer/src/mocks"),
        "@": resolve("src/renderer/src")
      }
    },
    plugins: [react()]
  }
});
