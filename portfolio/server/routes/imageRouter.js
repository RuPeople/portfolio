const Router = require('express')
const router = new Router()
const imageController = require('../controllers/imageController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), imageController.create)
router.get('/', imageController.getAll)

module.exports = router
