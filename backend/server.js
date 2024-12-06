const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'supersecretkey'; // Ganti dengan key rahasia yang aman

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Koneksi ke MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Model User
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

// Endpoint Registrasi
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Enkripsi password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user ke database
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error registering user', error: err.message });
  }
});

// Endpoint Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Cari user berdasarkan username
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    // Cek password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ success: false, message: 'Invalid credentials' });

    // Buat token JWT
    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ success: true, token });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error logging in', error: err.message });
  }
});


// Jalankan server
app.listen(PORT, () => console.log(`Server running on http://localhost :${PORT}`));
