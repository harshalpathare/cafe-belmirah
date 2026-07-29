import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Experience extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
  declare image: string;
  declare images: string; // JSON string of image URLs
  declare icon: string;
  declare category: string;
}

Experience.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    images: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'experiences',
  }
);
