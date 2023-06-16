const Asset = require('../models/assetsModel')

async function get(req, res, next) {
    try{
        const assets = await Asset.find({});
        res.send(assets)
    } catch (error){
        console.error("Error when trying to query assets",error.message)
        next(error)
    }
}

async function getbyID(req, res, next) {
    const { id } = req.params;
    try{
        const assets = await Asset.findById(id);
        res.status(200).send(assets)
    } catch (error){
        console.error("Error when trying to query assets",error.message)
        next(error)
    }
}

async function create(req, res, next) {
    try{
        newAsset = await Asset.create(req.body)
        res.send(newAsset);
    } catch(error){
        console.error("Error when trying to create asset",error.message)
        next(error)
    }
}

module.exports = {
    get,
    getbyID,
    create,
};