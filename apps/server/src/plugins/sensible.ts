import sensible from '@fastify/sensible'
import plugin from 'fastify-plugin'
import type { FastifySensibleOptions } from '@fastify/sensible'

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default plugin<FastifySensibleOptions>(async (fastify) => {
	fastify.register(sensible)
})
