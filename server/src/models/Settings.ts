import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Settings extends Model {
  declare id: number;
  declare maxGlampingBookingsPerDay: number;
  declare maxTableReservationsPerDay: number;
}

Settings.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    maxGlampingBookingsPerDay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
    },
    maxTableReservationsPerDay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 20,
    }
  },
  {
    sequelize,
    tableName: 'Settings',
  }
);
