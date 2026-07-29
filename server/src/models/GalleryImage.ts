import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class GalleryImage extends Model {
  declare id: number;
  declare url: string;
  declare title: string;
  declare category: string;
}

GalleryImage.init(
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
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'All',
    },
  },
  {
    sequelize,
    tableName: 'gallery_images',
  }
);
