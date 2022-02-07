const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
    name: { type: String, required: true  },
    img: { type: String, required: true },
    traces:{ type: String },
    allergens: [{ type: mongoose.Types.ObjectId, ref: 'Allergen'}],

  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model('Food', foodSchema);


module.exports = Food;