// Imports

import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./routes/auth');

// middleware -> Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(bodyParser.json());

// middleware for cross-origin resource sharing -> allows restricted resources on a web page to be requested from another domain outside the original domain
app.use(cors());

app.use('/api/auth', authRouter);

// Routes

app.get('/', (req, res) => {
  res.send('Hello, my g!');
});

// CRUD

// post a post
app.post('/api/posts', async (req, res) => {
	try {
	  const { title, category, thought } = req.body;
	  const post = await prisma.post.create({
		data: {
		  title,
		  category,
		  thought,
		},
	  });
	  res.status(201).json(post);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: 'Unable to create post' });
	}
  });

// delete a post
app.delete("/api/posts/:id", async (req, res) => {
	// id as the unique identifier in the database for the post to be deleted
	const { id } = req.params;
	await prisma.post.delete({ where: { id: Number(id) } });
	res.sendStatus(204);
  });

  // Update a post
app.put('/posts/:postId', async (req, res) => {
	const { title, thought } = req.body;
	const { postId } = req.params;
  
	try {
	  // Update the post in the database
	  const updatedPost = await prisma.post.update({
		// postId as the unique identifier of the updated post (URL parameter -> matches the parameter name in the route definition)
		where: { id: parseInt(postId) },
		data: { title, thought },
	  });
  
	  // Send the updated post as a response
	  res.status(200).json(updatedPost);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ message: 'Error updating post' });
	}
  });
  



// Auth routes



// const indexRouter = require('./routes/index');
// const authRouter = require('./routes/auth');

// app.use('/', indexRouter);
// app.use('/', authRouter);

// Start the server

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//