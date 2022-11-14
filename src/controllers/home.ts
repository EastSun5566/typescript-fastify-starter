// import type { RouteShorthandOptionsWithHandler } from 'fastify';

import type { HomeService } from '../services';

export class HomeController {
  constructor(
    private readonly homeService: InstanceType<typeof HomeService>,
  ) {}

  index() {
    return this.homeService.greet();
  }
}

export default HomeController;
