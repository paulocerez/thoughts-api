"use strict";
// Imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
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
// app.post('/user', async (req, res) => {
//     const user = await prisma.user.create({
//         data: {
//             email: "leandro.ramirez@gmail.com",
//             name: "leocerez"
//         }
//     });
//     console.log(user)
// });
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
