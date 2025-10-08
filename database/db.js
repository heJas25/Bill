const { Sequelize} =require('sequelize');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } =require('../config/env.js') ;

console.log("Password:", DB_PASSWORD);

const sequelize =new Sequelize(DB_NAME, DB_USER, DB_PASSWORD,{
    host:DB_HOST,
    port:DB_PORT,
    dialect:'postgres',
    
})


module.exports = sequelize;