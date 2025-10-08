const { DataTypes } = require("sequelize");
const sequelize = require("../database/db.js");
const Products = require("./Products.js")

const listProd = sequelize.define("listProd", {
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

//Connect the listProd table to the Products and Bills tables
listProd.belongsTo(Products, { foreignKey: 'id_prod' })
listProd.belongsTo(Bills, { foreignKey: 'id_bill' })

// Automatically calculate the total price before saving it
listProd.beforeSave(async (listProd) => {
  const product = await Products.findByPk(listProd.id_prod);

  if(product) {
    listProd.totalPrice = listProd.quantity * product.price
  } else {
    console.error('Product not found');
  }
})

module.exports = ListProd;
