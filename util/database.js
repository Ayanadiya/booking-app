const Sequelize = require('sequelize');

const sequelize= new Sequelize('bookingapp', 'root', 'Ayana@17', {
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;