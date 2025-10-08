const {DataTypes} = require('sequelize');
const sequelize = require('../database/db.js');

const products = sequelize.define('products',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull:false,
    },
    category:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull:false,
    }
})
module.exports = products;