import  { Model, DataTypes } from 'sequelize'
import  sequelize from '../database' // You will create this file next
import  Category from './Category'

class Product extends Model {}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: true,      // Allow null values for categoryId
    defaultValue: null, 
    references: {
      model: Category,
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Product',
});

Product.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Product, { foreignKey: 'categoryId' });

export default Product;
