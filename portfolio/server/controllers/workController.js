const uuid = require('uuid')
const path = require('path')
const {Work} = require("../models/models");
const ApiError = require('../error/ApiError')

class  WorkController {
    async create (req, res, next) {
        try{
            const {name, smallDescription, bigDescription, website, stack, year, categoryId} = req.body
            const {thumbnail} = req.files
            let fileName = uuid.v4() + ".svg"
            await thumbnail.mv(path.resolve(__dirname, '..', 'static', fileName))

            const work = await Work.create({name, smallDescription, bigDescription, website, stack, year, thumbnail:fileName, categoryId})
            return res.json(work)
        }
        catch (e) {
            next(ApiError.badRequest())
        }
    }
    async getAll (req, res) {
        let {categoryId,limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit-limit
        let works;

        if (!categoryId) {
            works = await Work.findAndCountAll({limit, offset})
        }
        if(categoryId) {
            works = await Work.findAndCountAll({where: {categoryId}, limit, offset})
        }
        return res.json(works)
    }
    async getOne (req, res, next) {
        const {id} = req.params
        const work = await Work.findOne(
            {
                where: {id},
            }
        )
        return res.json(work)
    }
    async delete (req, res) {

    }
}
module.exports = new WorkController()