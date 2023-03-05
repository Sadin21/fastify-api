const userSchema = require("../models/schema");

exports.getUsers = async (req, reply) => {
  try {
    const bus = await userSchema.find();
    return bus;
  } catch (err) {
    throw this.err;
  }
};

exports.getSingleUser = async (req, reply) => {
  try {
    const id = req.params.id;
    const user = await userSchema.findById(id);
    return user;
  } catch (err) {
    throw this.err;
  }
};

exports.addUser = async (req, res) => {
  try {
    const user = new userSchema(req.body);
    const save = user.save();
    res.status(200).json({ message: "Success" });
  } catch (err) {
    throw this.err;
  }
};

exports.updateUser = async (req, reply) => {
  try {
    const id = req.params.id;
    const user = req.body;
    const { ...updateData } = user;
    const update = await userSchema.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return update;
  } catch (err) {
    throw this.err;
  }
};

exports.deleteUser = async (req, reply) => {
  try {
    const id = req.params.id;
    const user = await userSchema.findByIdAndRemove(id);
    return user;
  } catch (err) {
    throw this.err;
  }
};
