import { defineConfig } from 'vite'
import { rmSync } from 'node:fs'
import react from '@vitejs/plugin-react-swc'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  rmSync('dist-electron', { recursive: true, force: true })

  const isServe = command === 'serve'
  const isBuild = command === 'build'
  const sourcemap = isServe || !!process.env.VSCODE_DEBUG

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      react(),
      electron([
        {
          entry: 'electron/main.ts',
          onstart(options) {
            options.startup()
          },
          vite: {
            build: {
              sourcemap: sourcemap,
              minify: isBuild,
            },
          },
        },
        {
          entry: 'electron/preload.ts',
          onstart(options) {
            options.reload()
          },
          vite: {
            build: {
              sourcemap: sourcemap ? 'inline' : undefined,
              minify: isBuild,
            },
          },
        },
      ]),
      renderer(),
    ],
  }
})