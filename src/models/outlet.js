"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class outlet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      outlet.hasOne(models.user, {
        as: "user",
        foreignKey: "idOutlet",
      });
    }
  }
  outlet.init(
    {
      nama: DataTypes.STRING(100),
      alamat: DataTypes.TEXT,
      tlp: DataTypes.STRING(11),
    },
    {
      sequelize,
      modelName: "outlet",
    }
  );
  return outlet;
};
