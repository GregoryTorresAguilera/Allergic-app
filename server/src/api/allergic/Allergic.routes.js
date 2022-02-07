const AllergicRoutes = require('express').Router()
const { isAuth } = require('../../middlewares/auth')
const upload = require('../../middlewares/file')
const { postNewAllergic, getAllAllergics, getAllergic, getAllergicFilter} = require('./allergic.controller')


AllergicRoutes.get('/', getAllAllergics)
AllergicRoutes.get('/:id', getAllergic)
AllergicRoutes.get('/filter/:type', getAllergicFilter)
AllergicRoutes.post('/', postNewAllergic)
//VehicleRoutes.patch('/:id', [isAuth], upload.single('img'), patchVehicle)
//VehicleRoutes.delete('/:id', [isAuth], upload.single('img'), deleteVehicle)

module.exports = AllergicRoutes