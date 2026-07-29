import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Story extends Model {
  declare public id: number;
  declare public title: string;
  declare public subtitle: string;
  declare public paragraph1: string;
  declare public paragraph2: string;
  declare public imageUrl: string;
  declare public imagePosition: 'left' | 'right';
  declare public readonly createdAt: Date;
  declare public readonly updatedAt: Date;
}

Story.init(
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
    subtitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paragraph1: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    paragraph2: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagePosition: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'center',
    },
  },
  {
    sequelize,
    modelName: 'Story',
    tableName: 'stories',
  }
);
