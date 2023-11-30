const { Message } = require('../models');
module.exports.getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.find();
    res.status(200).send({ data: messages });
  } catch (error) {
    next(error);
  }
};
