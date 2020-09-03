import User from '../models/user-model';
import bcrypt, { hash } from 'bcrypt';

const createUser = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user',
    });
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const user = new User({
    username: body.username,
    email: body.email,
    password: hashedPassword,
  });

  if (!user) {
    return res.status(400).json({ success: false, error: err });
  }

  user
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: user._id,
        message: 'User created!',
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: 'User not created!',
      });
    });
};

const updateUser = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }

  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'User not found!',
      });
    }
    user.name = body.name;
    user.downloads = body.downloads;
    user.likes = body.likes;
    user.audio = body.audio;
    user
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: user._id,
          message: 'User updated!',
        });
      })
      .catch((error) => {
        return res.status(400).json({
          error,
          message: 'User not updated!',
        });
      });
  });
};

const deleteUser = async (req, res) => {
  await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found',
      });
    }

    return res.status(200).json({ success: true, data: user });
  }).catch((err) => console.log(err));
};

const getUserById = async (req, res) => {
  await User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found!',
      });
    }

    return res.status(200).json({ success: true, data: user });
  }).catch((err) => console.log(err));
};

const getUsers = async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!users.length) {
      return res.status(404).json({ success: false, error: 'No users found' });
    }

    return res.status(200).json({ success: true, data: users });
  }).catch((err) => console.log(err));
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getUsers,
};
