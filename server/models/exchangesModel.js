module.exports = (sequelize, DataTypes) => {
    const Exchange = sequelize.define('Exchange', {
        created_at: DataTypes.DATE,
      });
  
    return Exchange;
  };