const { Company,Location, sequelize } = require('../models');
const {validationResult} = require('express-validator')

const getAllLocationsByCompanyId = async (req, res) => {
    const { id } = req.params;
    const company = await Company.findByPk(id);
    if (!company) return await res.sendStatus(404);

    const locations = await company.getLocations();
    if (Object.keys(locations).length === 0) return await res.send('locations are empty')
    res.send(locations);
}

const createLocations = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.sendStatus(404);

    const { id } = req.params;
    const { name, capacity, manager } = req.body;

    const company = await Company.findByPk(id);
    if (!company) return res.sendStatus(404);

    await company.createLocation({
        name,
        capacity,
        manager,
    })
   res.send('location added');
}

const updateLocations = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.sendStatus(404);

    const { id, locationId } = req.params;

    const location = await Location.findByPk(locationId);

    if (!location) return res.sendStatus(404);
    if (location.dataValues.CompanyId.toString() !== id) return res.sendStatus(404);

    await location.update(req.body);
    res.send('location edited')
}

const deleteLocations = async (req, res) => {
    const { id, locationId } = req.params;
    
    const location = await Location.findByPk(locationId);

    if (!location) return res.sendStatus(404);
    if (location.dataValues.CompanyId.toString() !== id) return res.sendStatus(404);

    await location.destroy();
    res.send('location deleted')
}

module.exports = {getAllLocationsByCompanyId, createLocations, updateLocations, deleteLocations}