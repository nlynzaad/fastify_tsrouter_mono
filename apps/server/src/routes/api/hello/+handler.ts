import type {FastifyPluginAsync} from "fastify";

const index: FastifyPluginAsync = async (fastify): Promise<void> => {
	fastify.get('/', async () => {
		return {data: 'Hello from API!'}
	})
}
export default index
