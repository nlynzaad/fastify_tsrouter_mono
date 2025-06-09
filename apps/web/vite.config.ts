import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'
import tanstackRouter from '@tanstack/router-plugin/vite'
import {vaviteConnect} from "@vavite/connect";
import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import type {ConfigEnv, UserConfig} from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// SSR configuration
const ssrBuildConfig: UserConfig = {
	build: {
		ssr: true,
		outDir: 'dist/server',
		ssrManifest: true,
		ssrEmitAssets: true,
		minify: true,
		copyPublicDir: false,
		emptyOutDir: true,
		rollupOptions: {
			output: {
				chunkFileNames: 'assets/[name]-[hash].js',
				assetFileNames: 'assets/[name]-[hash][extname]'
			}
		}
	}
}

// Client-specific configuration
const clientBuildConfig: UserConfig = {
	build: {
		outDir: 'dist/client',
		emitAssets: true,
		manifest: true,
		minify: true,
		copyPublicDir: true,
		emptyOutDir: true,
		rollupOptions: {
			input: resolve(__dirname, 'src/entry-client.tsx'),
			output: {
				entryFileNames: '[name].js',
				chunkFileNames: 'assets/[name]-[hash].js',
				assetFileNames: 'assets/[name]-[hash][extname]'
			}
		}
	}
}

export default defineConfig((configEnv: ConfigEnv): UserConfig => {
	return {
		ssr: {
			external: ['react', 'react-dom'],
			target: 'node'
		},
		plugins: [
			viteTsConfigPaths(),
			tanstackRouter({
				target: 'react',
				autoCodeSplitting: true,
				tmpDir: resolve(__dirname, 'tmp'),
			}),
			vaviteConnect({
				handlerEntry: resolve(__dirname, 'src/entry-server.ts'),
				serveClientAssetsInDev: true,
				standalone: false
			}),
			react()
		],
		server: {
			proxy: {
				'/api': {
					target: 'http://localhost:3030',
					changeOrigin: true
				}
			}
		},
		...(configEnv.isSsrBuild ? ssrBuildConfig : clientBuildConfig),
	}
})
