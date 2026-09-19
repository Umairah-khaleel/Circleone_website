const express = require('express');
const router = express.Router();
const pool = require('../models/userModel');
const bcrypt = require('bcryptjs'); // Import bcrypt for hashing

// POST: Signup Route with strict validation and password hashing
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1. Check if all fields are filled
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Please fill in all fields' });
        }

        // 2. Check name length (max 150 characters)
        if (name.length > 150) {
            return res.status(400).json({ error: 'Name cannot exceed 150 characters' });
        }

        // 3. Check email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Please enter a valid email address' });
        }

        // 4. Check password strength (at least 6 chars, 1 number, 1 uppercase letter)
        if (password.length < 6) {
            return res.status(400).json({ error: 'Password must be at least 6 characters long' });
        }
        if (!/\d/.test(password)) {
            return res.status(400).json({ error: 'Password must contain at least 1 number' });
        }
        if (!/[A-Z]/.test(password)) {
            return res.status(400).json({ error: 'Password must contain at least 1 uppercase letter' });
        }

        // 5. Check if email already exists in the database
        const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ error: 'Email is already registered' });
        }

        // 6. Hash the password securely before saving
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // 7. Insert new user with the HASHED password into the database
        const [result] = await pool.query(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, hashedPassword]
        );

        res.status(201).json({ 
            message: 'User registered successfully!', 
            userId: result.insertId 
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error during signup' });
    }
});

module.exports = router;