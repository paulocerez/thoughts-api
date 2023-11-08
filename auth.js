const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');
const db = require('../db');

import { PrismaClient } from '@prisma/client';
const prisma = PrismaClient();

// fetch user record from the app's database -> verify the hashed password against the password submitted by the user
passport.use(new LocalStrategy(async function verify(username, password, cb) {
	try {
		const user = await prisma.user.findUnique({
			where: { username: username }
		});

		if (!user) {
			return cb(null, false, { message: 'Username or password are incorrect!'});
	}
  
	  crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', (err, hashedPassword) => {
		if (err) { return cb(err); }


		const derivedPassword = new Uint8Array(hashedPassword);

		if (!crypto.timingSafeEqual(user.hashed_password, derivedPassword)) {
		  return cb(null, false, { message: 'Username or password are incorrect.' });
		}
		return cb(null, user);
	  });
	} catch (err) {
		return cb(err);
	}
	}));