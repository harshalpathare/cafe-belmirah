import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Inquiry extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public subject!: string;
  public message!: string;
  public status!: 'unread' | 'read';
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Inquiry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('unread', 'read'),
      defaultValue: 'unread',
    },
  },
  {
    sequelize,
    tableName: 'inquiries',
  }
);
