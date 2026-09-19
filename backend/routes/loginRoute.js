const express = require('express');
const router = express.Router();
const pool = require('../models/userModel');
const bcrypt = require('bcryptjs'); // Import bcrypt for password comparison

// POST: Login Route with bcrypt verification and specific error messages
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Check if both fields are typed in
        if (!email || !password) {
            return res.status(400).json({ error: 'Required fields' });
        }

        // 2. Check if the email exists in the database
        const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (users.length === 0) {
            return res.status(400).json({ error: 'Incorrect email' });
        }

        const user = users[0];

        // 3. Compare typed password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Incorrect password' });
        }

        // 4. Successful login
        res.status(200).json({ 
            message: 'Login successful!', 
            user: { id: user.id, name: user.name, email: user.email } 
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error during login' });
    }
});

module.exports = router;