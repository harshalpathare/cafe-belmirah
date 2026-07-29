import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class HeroMedia extends Model {
  declare id: number;
  declare url: string;
  declare type: string; // 'image' or 'video'
}

HeroMedia.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'image',
    },
  },
  {
    sequelize,
    tableName: 'hero_media',
  }
);
