import { app } from './app';
import { config } from './config';
import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize(
  config.DATABASE,
  config.DB_USERNAME,
  config.PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
    models: [__dirname + '/models']
    // pool: {
    //   max: 5,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000
    // }
  }
);

app.listen(config.PORT, () => {
  console.log('Server is running...');
  sequelize
    .authenticate()
    .then(async () => {
      console.log(
        'We successfully connected to data base!'
      );

      try {
        await sequelize.sync(
            // {force: true }
            );
      } catch (e) {
        console.log(e.message);
      }
    })
    .catch((error: Error) => {
      console.log(error.message);
    });
});
