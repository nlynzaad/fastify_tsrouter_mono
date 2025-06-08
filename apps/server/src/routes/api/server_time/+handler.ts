import type {FastifyPluginAsync} from 'fastify'

const index: FastifyPluginAsync = async (fastify): Promise<void> => {
	fastify.get('/', async (_, reply) => {
		let id = 0;

		reply.sse((async function* source() {
				while (true) {
					const message = `It is ${new Date().toISOString()}`

					yield {
						data: message,
						event: 'time-update',
						id: String(id++)
					}

					await new Promise(resolve => setTimeout(resolve, 1000));
				}
			}
		)())
	})
}

export default index
