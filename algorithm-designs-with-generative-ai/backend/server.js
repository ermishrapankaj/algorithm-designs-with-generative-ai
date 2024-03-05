const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 8080; // Choose a port different from 5000

app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: '8*zBcD!1fGhJ2#kLmN3^pQrStU4&vWx', // INPUT_REQUIRED: Set your session secret.
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
