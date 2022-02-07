const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
    name: { type: String, required: true  },
    img: { type: String, required: true },
    traces:[{ type: mongoose.Types.ObjectId, ref: 'Allergen'}],
    allergens: [{ type: mongoose.Types.ObjectId, ref: 'Allergen'}],
    barcode: { type: Number}

  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model('Food', foodSchema);


module.exports = Food;