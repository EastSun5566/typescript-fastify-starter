import type {FastifyPluginAsync} from 'fastify';

const home: FastifyPluginAsync = async (app): Promise<void> => {
	app.get('/', async () => 'Hello World!');
};

export default home;
