const express = require('express');
const cors = require('cors');
const cloudinary = require('cloudinary').v2
const { setError } = require('./server/src/utils/error/error')
const UserRoutes = require('./server/src/api/user/user.routes')
const AllergicRoutes = require('./server/src/api/allergic/Allergic.routes')

const { connectDb } = require('./server/src/utils/database/db');

const PORT = process.env.PORT || 8080

const app = express()

connectDb()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4200'],
    credentials: true
}))
app.use(express.json({
    limit: '5mb'
}))
app.use(express.urlencoded({ limit: '5mb', extended: true }))

