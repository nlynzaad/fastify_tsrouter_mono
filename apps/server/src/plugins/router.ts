import plugin from 'fastify-plugin';

// @ts-ignore
import routes from 'virtual:fastify-routes';

export default plugin(
	async (app) => {
		routes(app, {
			prefix: '',
		});
	},
	{ name: 'router' },
);
