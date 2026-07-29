import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dialect = (process.env.DB_DIALECT as any) || 'sqlite';

const isPostgres = process.env.DATABASE_URL?.startsWith('postgres');

export const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, {
      dialectOptions: isPostgres ? {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      } : undefined,
      logging: false,
    })
  : new Sequelize({
      dialect: dialect,
      storage: dialect === 'sqlite' ? process.env.DB_STORAGE || './database.sqlite' : undefined,
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      logging: false,
    });
