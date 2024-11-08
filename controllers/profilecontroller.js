const User = require('../models/userModel');

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.userId);
  res.render('profile', { user });
};

exports.updateProfile = async (req, res) => {
  const { username, phoneNumber, email } = req.body;
  await User.findByIdAndUpdate(req.user.userId, { username, phoneNumber, email });
  res.send("Profile updated");
};

exports.deleteProfile = async (req, res) => {
  await User.findByIdAndDelete(req.user.userId);
  res.send("Profile deleted");
};
