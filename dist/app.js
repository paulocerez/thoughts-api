// Imports
import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import cors from 'cors';
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
// connecting the post - related routes
import postRoutes from './routes/posts';
// middleware -> Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(bodyParser.json());
// middleware for cross-origin resource sharing -> allows restricted resources on a web page to be requested from another domain outside the original domain
app.use(cors());
app.use(postRoutes);
// local configuration of the database for local development
// import config from './config/local'
// Database connection setup
// const dbConfig = config.database;
// Connect to the database using dbConfig.host, dbConfig.username, dbConfig.password, etc.
// Routes
app.get('/', (req, res) => {
    res.send('Hello, my serving friend!');
});
// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//
