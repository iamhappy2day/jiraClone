import dotenv from 'dotenv';
dotenv.config();

declare const process: {
  env: {
      PORT: number;
      DATABASE: string;
      DB_USERNAME: string;
      PASSWORD: string;
      NODE_ENV: string;
  }
};
export const config = {
    PORT: process.env.PORT || 3000,
    DATABASE: process.env.DATABASE,
    DB_USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.PASSWORD,
    APP_STATUS: process.env.NODE_ENV
};
