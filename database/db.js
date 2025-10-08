const { Sequelize} =require('sequelize');
 import { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } from '../config/env';
const sequelize =new Sequelize(DB_NAME, DB_USER, DB_PASS,{
    host:DB_HOST,
    port:DB_PORT,
    dialect:'postgres',
})

module.exports = sequelize;