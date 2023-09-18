import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    build: {
      rollupOptions: {
        // ... інші опції rollup
        onwarn: (warning, rollupWarn) => {
          if (warning.code !== 'NON_EXISTENT_EXPORT' && warning.code !== 'UNUSED_EXTERNAL_IMPORT') {
            rollupWarn(warning);
          }
        },
      },
    },
  };
});
