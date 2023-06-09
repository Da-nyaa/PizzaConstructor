const schemes = require('../models/mongoose');

module.exports.create = async (res, parameters) => {
  const { phone, size, dough, sauce, meat, cheese, vegetables, fruits, price } =
    parameters;

  const newOrder = schemes.CreatePizza({
    phone,
    size,
    dough,
    sauce,
    meat,
    cheese,
    vegetables,
    fruits,
    price
  });

  try {
    await newOrder.save();
    return res.status(201).json({
      status: 201,
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error,
    });
  }
};

module.exports.get = async (res, parameters) => {
  const { phone } = parameters;

  try {
    const orders = await schemes.CreatePizza.find(
      phone ? { phone: `${phone}` } : {}
    );
    return res.status(200).json({
      status: 200,
      order: orders,
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error,
    });
  }
};
