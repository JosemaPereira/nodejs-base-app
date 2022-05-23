import { RootController } from '../controllers';

export default (app, router) => {
  app.use('/', router);
  router.get('/', RootController.getRootMessage);
};
