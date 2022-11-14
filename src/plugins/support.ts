import fp from 'fastify-plugin';

export type SupportPluginOptions = {
  // Specify Support plugin options here
};

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<SupportPluginOptions>(async (fastify, opts) => {
  fastify.decorate('someSupport', () => 'hugs');
});

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  export type FastifyInstance = {
    someSupport(): string;
  };
}
