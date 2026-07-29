import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Testimonial extends Model {
  declare id: number;
  declare name: string;
  declare role: string;
  declare content: string;
  declare rating: number;
  declare isApproved: boolean;
}

Testimonial.init(
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
    role: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
    },
    isApproved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'testimonials',
  }
);
