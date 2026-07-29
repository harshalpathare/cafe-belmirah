import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class SiteContent extends Model {
  declare public id: number;
  declare public key: string;
  declare public value: string;
}

SiteContent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'SiteContent',
    timestamps: false,
  }
);
