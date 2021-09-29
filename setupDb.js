const { sequelize, Location, Company, Menu } = require('./models');
require('dotenv').config();

const setupDb = async (app, port) => {

    // relationships
    Company.hasMany(Location);
    Location.belongsTo(Company);

    Company.hasMany(Menu);
    Menu.belongsTo(Company);

    await sequelize.sync({ force: false });
    await app.listen(port, () => { console.log(`listening on: http://localhost:${port}`) });
}

module.exports = setupDb;