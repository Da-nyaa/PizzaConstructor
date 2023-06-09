const mongoose = require('../services/mongoose');

const CreatePizza = mongoose.model(
  'Pizza',
  {
    phone: {
      type: String,
      required: true,
    },
    size: String,
    dough: String,
    sauce: Array,
    meat: Array,
    cheese: Array,
    vegetables: Array,
    fruits: Array,
    price: String,
  },
  'pizza'
);

module.exports = {
  CreatePizza,
};
