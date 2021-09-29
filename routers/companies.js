const express = require('express');
const router = express.Router();

const { getAllCompanies, createCompanies, getACompany, updateCompany } = require('../controllers/companies');
const { getAllLocationsByCompanyId, createLocations, updateLocations, deleteLocations } = require('../controllers/locations');
const { getAllMenus, createMenus, deleteMenus } = require('../controllers/menus');
const { companyValidationRules, locationValidationRules, menuValidationRules } = require('../validators');

// localhost:3000/companies/routerName

/* COMPANIES */
router.get('/', (req, res) => {
    getAllCompanies(req, res);
});

router.get('/:id', (req, res) => {
    getACompany(req, res);
})

router.post('/', companyValidationRules(), (req, res) => {
    createCompanies(req, res);
});

router.patch('/:id', companyValidationRules(), (req, res) => {
    updateCompany(req, res);
})

/* LOCATIONS */
router.get('/:id/locations', (req, res) => {
    getAllLocationsByCompanyId(req, res);
})

router.post('/:id/locations', locationValidationRules(), (req, res) => {
    createLocations(req, res);
})

router.put('/:id/locations/:locationId', locationValidationRules(), (req, res) => {
    updateLocations(req, res);
})

// localhost:3000/companies/:id/locations/:locationId
router.delete('/:id/locations/:locationId', (req, res) => {
    deleteLocations(req, res);
})


/* MENU */
router.get('/:id/menus/', (req, res) => {
    getAllMenus(req, res);
})

router.post('/:id/menus/', menuValidationRules(), (req, res) => {
    createMenus(req, res);
})

router.delete('/:id/menus/:menuId', (req, res) => {
    deleteMenus(req, res);
})

module.exports = router;