const { Company } = require('../models');
const {  validationResult } = require('express-validator');

const createCompanies = async (req, res) => {
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) return res.sendStatus(404);
    
    const { name, logoUrl } = req.body;

    const company = await Company.create({
        name,
        logoUrl
    });

    res.send(company);
}

const getAllCompanies = async (req, res) => {
    const companies = await Company.findAll();
    
    res.send(companies);
}

const getACompany = async (req, res) => {
    const { id } = req.params;

    const company = await Company.findByPk(id);
    if (!company) {
        return res.sendStatus(404);
    }

    res.send(company);
}

const updateCompany = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.sendStatus(404);

    const { id } = req.params;
    const company = await Company.findByPk(id);
    if (!company) return res.sendStatus(404);

    await Company.update(req.body);

    res.send('company info updated.')
}

module.exports = {createCompanies, getAllCompanies, getACompany, updateCompany};