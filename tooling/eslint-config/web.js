import baseConfig from './base.js'
import pluginRouter from '@tanstack/eslint-plugin-router'

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
const webConfig = [
	...baseConfig,
	{
		plugins: {
			'@tanstack/router': pluginRouter
		},
		rules: {
			'@tanstack/router/create-route-property-order': 'error'
		}
	}
]

export default webConfig
