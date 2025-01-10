import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [solid(), tsconfigPaths()],
    resolve: {
        alias: {
            "@components": "/src/components",
            "@layouts": "/src/layouts",
            "@pages": "/src/pages",
        },
    },
})
