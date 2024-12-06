const mongoose = require('mongoose');

// Mendefinisikan schema pengguna
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Mengekspor model User
module.exports = mongoose.model('User', userSchema);
