import  { Sequelize } from 'sequelize'

const sequelize = new Sequelize('database_name_test', 'root', 'root',{
    host: 'localhost',  // Your database host
    dialect: 'mysql', 
});

export default  sequelize;
