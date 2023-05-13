const express = require('express')
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client')

const router = express.Router()
const prisma = new PrismaClient()

// Login Route

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  res.json({ message: 'Authentication successful' })
})


// Signup Route

router.post('/signup', async (req, res) => {
	const { email, password } = req.body;
  
	// Validate email and password
	if (!email || !password) {
	  return res.status(400).json({ error: 'Email and password are required' });
	}
  
	// Hash password
	const hashedPassword = await bcrypt.hash(password, 10);
  
	try {
	  // Create new user in database using Prisma
	  const user = await prisma.user.create({
		data: {
		  email,
		  password: hashedPassword,
		},
	  });
  
	  res.json({ message: 'User created successfully', user });
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: 'Failed to create user' });
	}
  });

module.exports = router
