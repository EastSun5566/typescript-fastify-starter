import fastifyPlugin from 'fastify-plugin';
import type { SensibleOptions } from '@fastify/sensible';
import sensible from '@fastify/sensible';

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export const sensiblePlugin = fastifyPlugin<SensibleOptions>(async (app) => {
  app.register(sensible);
});

export default sensiblePlugin;
