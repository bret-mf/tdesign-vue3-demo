import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { TDesignResolver } from "unplugin-vue-components/resolvers";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      host: "0.0.0.0",
      port: 8888,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    base: env.VITE_APP_BASE_PATH,
    plugins: [
      vue(),
      AutoImport({
        resolvers: [
          TDesignResolver({
            library: "vue-next",
          }),
        ],
      }),
      Components({
        resolvers: [
          TDesignResolver({
            library: "vue-next",
          }),
        ],
      }),
    ],
  };
});
