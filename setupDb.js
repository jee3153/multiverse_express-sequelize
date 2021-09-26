const db  = require('./models');

const setupDb = async (app, port) => {
    // relationship
    await db.sequelize.sync({ force: true });
    await app.listen(port, () => { console.log(`listening on: http://localhost:${port}`) });
}

module.exports = setupDb;