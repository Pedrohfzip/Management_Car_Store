'use strict';

module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    transmission_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fuel_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    license_plate: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    doors: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Car',
    timestamps: true
  });

  // Associations (if needed) can be defined here

  return Car;
};
