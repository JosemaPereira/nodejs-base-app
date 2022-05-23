import app from './app';
import { Config } from './providers';

app.listen(Config.port, () => {
  console.log('listening at', Config.port);
});

module.exports = app;
