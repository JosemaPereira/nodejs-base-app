import {RootServices} from '../services';
import {STATUS_CODES} from '../constants';

export const RootController = {
  getRootMessage: async (_req, res, _next) => {
    const message = await RootServices.getDefaultMessage();
    res.status(STATUS_CODES.OK).json(message);
  },
};
