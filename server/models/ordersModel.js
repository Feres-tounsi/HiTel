module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        quantity: DataTypes.INTEGER,
        total_price: DataTypes.DECIMAL(10, 2),
        created_at: DataTypes.DATE,
      });
  
    return Order;
  };