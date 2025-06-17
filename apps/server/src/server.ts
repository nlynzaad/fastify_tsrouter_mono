import {dirname} from "node:path";
import {fileURLToPath} from "node:url";
import {constants as zlibConstants} from "node:zlib";
import {fastifyExpress} from "@fastify/express";
import Fastify from "fastify";
import {FastifySSEPlugin} from "fastify-sse-v2";
import router from "@server/plugins/router";
import sensible from "@server/plugins/sensible";
import type {FastifyInstance} from "fastify";

const loadFrontEnd = async (app: FastifyInstance) => {
	const ssrHandler = (await import('@repo/web')).default
	const staticPath = dirname(fileURLToPath(import.meta.resolve('@repo/web/client')));

	//register public assets
	await app.register(import('@fastify/static'), {
		root: staticPath,
		prefix: '/public/'
	})

	app.all('*', (req, res) => ssrHandler(req.raw, res.raw))
}

const fastify = Fastify({
	logger: true
})

fastify.register(FastifySSEPlugin);

await fastify.register(fastifyExpress);

await fastify.register(router);

await fastify.register(sensible);

if (import.meta.env.PROD) {
	try {
		const compression = (await import('compression')).default

		fastify.use(compression({
			brotli: {
				flush: zlibConstants.BROTLI_OPERATION_FLUSH,
			},
			flush: zlibConstants.Z_SYNC_FLUSH,
		}));

		//load web frontend
		await loadFrontEnd(fastify);

		await fastify.listen({port: 3000})
	} catch (err) {
		fastify.log.error(err);

		if (process.env.NODE_ENV === 'production') {
			process.exit(1);
		}
	}
}

export {fastify}
