const { Sequelize} =require('sequelize');

const sequelize =new Sequelize('','postgres','Nekooo2526',{
    host:'localhost',
    dialect:'postgres',
})

module.exports = sequelize;