import { Config } from '../providers';

export const configurationMiddleware = (req, _res, next) => {
  req.appConfig = Config;
  next();
};
