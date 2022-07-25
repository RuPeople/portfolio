const uuid = require('uuid')
const path = require('path')
const {Image, Work} = require("../models/models");
const ApiError = require('../error/ApiError')

class  ImageController {
    async create (req, res, next) {
        try{
            const {workId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpeg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const image = await Image.create({workId, img:fileName})
            return res.json(image)
        }
        catch (e) {
            next(ApiError.badRequest())
        }
    }
    async getAll (req, res) {
        let images;
        let {workId} = req.query

        if (!workId) {
            images = await Image.findAndCountAll()
        }
        if (workId) {
            images = await Image.findAndCountAll({where:{workId}})
        }


        return res.json(images)
    }
}
module.exports = new ImageController()