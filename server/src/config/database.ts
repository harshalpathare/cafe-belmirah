import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dialect = (process.env.DB_DIALECT as any) || 'sqlite';

export const sequelize = new Sequelize({
  dialect: dialect,
  storage: dialect === 'sqlite' ? process.env.DB_STORAGE || './database.sqlite' : undefined,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
});
