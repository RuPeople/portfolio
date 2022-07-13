const Router = require('express')
const router = new Router()

const workRouter = require('./workRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/work', workRouter)

module.exports = router
