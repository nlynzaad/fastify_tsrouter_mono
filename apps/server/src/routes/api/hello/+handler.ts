import type {FastifyPluginAsync} from "fastify";

const index: FastifyPluginAsync = async (fastify): Promise<void> => {
	fastify.get('/', async () => {
		return 'Hello from API!'
	})
}
export default index
