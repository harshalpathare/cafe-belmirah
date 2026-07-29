import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Room extends Model {
  declare id: number;
  declare name: string;
  declare description: string;
  declare price: number;
  declare capacity: number;
  declare size: string;
  declare amenities: any; // We'll use TEXT and parse it
  declare image: string;
  declare images: any; // We'll use TEXT and parse it
  declare videoUrl: string;
  declare checkInTime: string;
  declare checkOutTime: string;
  declare policies: any; // We'll use TEXT and parse it
  declare totalUnits: number; // Inventory Count (e.g. 9 cottages)
  declare rating: number;
  declare reviews: number;
}

Room.init(
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amenities: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const val = this.getDataValue('amenities');
        return val ? JSON.parse(val) : [];
      },
      set(val: string[]) {
        this.setDataValue('amenities', JSON.stringify(val));
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    images: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const val = this.getDataValue('images');
        return val ? JSON.parse(val) : [];
      },
      set(val: string[]) {
        this.setDataValue('images', JSON.stringify(val || []));
      }
    },
    videoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    checkInTime: {
      type: DataTypes.STRING,
      defaultValue: '2:00 PM',
    },
    checkOutTime: {
      type: DataTypes.STRING,
      defaultValue: '11:00 AM',
    },
    policies: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const val = this.getDataValue('policies');
        return val ? JSON.parse(val) : ['Breakfast Included', 'Welcome Drink on Arrival', 'Bonfire Access', 'Free Cancellation (48hrs prior)'];
      },
      set(val: string[]) {
        this.setDataValue('policies', JSON.stringify(val));
      }
    },
    totalUnits: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 5.0,
    },
    reviews: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: 'rooms',
  }
);
