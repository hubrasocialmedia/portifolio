import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: [
      "5173-iy0ujfpgeqxfqi0sny8if-fc69a50f.manusvm.computer",
      "5174-iy0ujfpgeqxfqi0sny8if-fc69a50f.manusvm.computer",
      "5175-iy0ujfpgeqxfqi0sny8if-fc69a50f.manusvm.computer",
      "5176-iy0ujfpgeqxfqi0sny8if-fc69a50f.manusvm.computer",
      "localhost",
    ],
  },
})
