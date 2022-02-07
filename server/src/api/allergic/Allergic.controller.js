const Allergic = require('./Allergic.model')
const { setError } = require('../../utils/error/error')


 const postNewAllergic = async (req, res, next) => {
    try {
        const newAllergic = new Allergic()
        newAllergic.name = req.body.name
       
        if (req.file) {
            newAllergic.img = req.file.path
        }
        const allergicDB = await newAllergic.save()
        return res.status(201).json(allergicDB)
    } catch (error) {
        return next(setError(500, 'Allergic not saved'))
    }
} 

const getAllAllergics = async (req, res, next) => {
    try {
        const allergicsDB = await Allergic.find()
        res.status(200).json(allergicsDB)
    } catch (error) {
        return next(setError(500, 'Allergic failed server'))
    }
}

const getAllergic = async (req, res, next) => {
    try {
        const { id } = req.params
        const allergicDB = await Allergic.findById(id)
        if (!allergicDB) {
            return next(setError(404, 'Allergic not found'))
        }
        return res.status(200).json(allergicDB)
    } catch (error) {
        return next(setError(500, 'Allergic server error'))
    }
}

const getAllergicFilter = async (req, res, next) => {
    const { type } = req.params
    try {
        console.log(type);
        const allergicDB = await Allergic.find({
            type
        })/* .populate('vehicles') */
        if (!allergicDB) {
            return next(setError(404, ` ${id} not found`))
        }
        return res.status(200).json(allergicDB)
    } catch (error) {
        return next(setError(500, 'Allergics server error'))
    }
}





module.exports = {
    getAllergicFilter,
    postNewAllergic,
    getAllAllergics,
    getAllergic,
    
}