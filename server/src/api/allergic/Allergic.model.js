const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AllergicSchema = new Schema({
    name: { type: String, required: true, trim: true },
    img: { type: String, required: true, trim: true },
    
    
}, { timestamp: true }
)

const Allergic = mongoose.model('allergic', AllergicSchema)
module.exports = Allergic