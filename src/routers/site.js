const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteController')

router.use('/form', siteController.form);

router.use('/', siteController.home);

module.exports = router;
