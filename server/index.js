const express = require("express");
const { Sequelize } = require("sequelize");
const app = express();

const sequelize = new Sequelize("Hitel", "root", "Feresscorpion1998", {
  host: "localhost",
  dialect: "mysql",
});


const models = {
    User: require('./models/usersModel')(sequelize, Sequelize),
    Product: require('./models/productsModel')(sequelize, Sequelize),
    Order: require('./models/ordersModel')(sequelize, Sequelize),
    Exchange: require('./models/exchangesModel')(sequelize, Sequelize),
  };
  
  // Define the associations between models
  models.Product.belongsTo(models.User, { foreignKey: 'owner_id' });
  models.Order.belongsTo(models.Product, { foreignKey: 'product_id' });
  models.Order.belongsTo(models.User, { foreignKey: 'buyer_id' });
  models.Exchange.belongsTo(models.Product, { foreignKey: 'old_product_id' });
  models.Exchange.belongsTo(models.Product, { foreignKey: 'new_product_id' });
  models.Exchange.belongsTo(models.User, { foreignKey: 'buyer_id' });
  
  sequelize.sync();
  
  

sequelize
  .authenticate()
  .then(() => console.log("db ok."))
  .catch((error) => console.error("Unable to connect to the database:", error));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = { sequelize, models };