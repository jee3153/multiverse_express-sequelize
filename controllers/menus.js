const { Company, Menu } = require('../models');

const getAllMenus = async (req, res) => {
    const { id } = req.params;
    const company = await Company.findByPk(id);
    if (!company) return await res.sendStatus(404);
   
    const menus = await company.getMenus();

    if (Object.keys(menus).length === 0) return await res.send('menus are empty');
    res.send(menus);
}

const createMenus = async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const company = Company.findByPk(id);
    if (!company) return res.sendStatus(404);

    await company.createMenu({ title });

    res.send('menu created');
}

const deleteMenus = async (req, res) => {
    const { id, menuId } = req.params;
    const menu = await Menu.findByPk(menuId);

    if (!menu) return res.sendStatus(404);
    if (menu.dataValues.CompanyId.toString() !== id) return res.sendStatus(404);

    await menu.destroy();
    res.send('menu deleted');
}


module.exports = { getAllMenus, createMenus, deleteMenus };