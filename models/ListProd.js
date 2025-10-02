const { DataTypes } = require("sequelize");
const sequelize = require("../database/db.js");

const ListProd = sequelize.define("ListProd", {
  id_prod: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: "Products",
      key: "id",
    },
  },
  id_bill: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: "Bill",
      key: "id",
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
});

module.exports = ListProd;
