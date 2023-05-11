const router = require('express').Router()

const client = require('../controllers/client.controller')

router.get('/', client.getAllClients)
router.post('/', client.addClient)


module.exports = router