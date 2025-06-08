import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'
import {defineConfig} from 'vite'
import fastifyRoutes from "vite-plugin-fastify-routes";
import {VitePluginNode} from "vite-plugin-node";
import viteTsConfigPaths from 'vite-tsconfig-paths'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
	ssr: {
		external: ['@repo/web'],
		target: 'node'
	},
	plugins: [
		fastifyRoutes({
			routesDir: resolve(__dirname, 'src/routes'),
		}),
		VitePluginNode({
			adapter: 'fastify',
			appPath: resolve(__dirname, 'src/server.ts'),
			tsCompiler: 'esbuild',
			outputFormat: 'esm',
			exportName: 'fastify'
		}),
		viteTsConfigPaths(),
	],
	build: {
		target: 'esnext'
	},
	server: {
		port: 3030
	}
})
