import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "Lib",
      fileName: "index",
    },
    rollupOptions: {
      // Remove these deps from the bundled library
      external: ["react", "react/jsx-runtime", "react-dom"],
    },
  },
})
