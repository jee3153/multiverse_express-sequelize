const { Company, Location, Menu } = require('./models');
const { check , custom, body} = require('express-validator');

const companyValidationRules = () => {
    return [
        check('name').custom(async (val, { req }) => {
            const company = await Company.findOne({
                where: {name: val}
            });
            if (company) return Promise.reject('company exists');
    }),
        body('logoUrl').isURL()
    ]
}

const locationValidationRules = () => {
    return [
        body('name').isString(),
        body('capacity').isInt(),
        body('manager').isString()
    ]
}

const menuValidationRules = () => {
    return [
        check('title').custom(async (val, { req }) => {
            const menu = await Menu.findOne({
                where: {name: val, CompanyId: req.params.CompanyId}
            });
            if (menu) return Promise.reject('company exists');
    })
    ]
}

module.exports = {companyValidationRules, locationValidationRules, menuValidationRules}