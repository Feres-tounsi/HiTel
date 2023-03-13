module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        condition: DataTypes.ENUM('new', 'used'),
        price: DataTypes.DECIMAL(10, 2),
        image: DataTypes.STRING,
        category: DataTypes.ENUM('phone', 'computer', 'accessory'),
        created_at: DataTypes.DATE,
      });
      
  
    return Product;
  };