const {DataTypes} = require('sequelize');
const sequelize = require('../database/db.js');

const  Users = sequelize.define('Users',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    role:{
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue:'client',
    },
});
module.exports = Users;