import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { registerValidator } from './validations/auth.js';

import checkAuth from './utils/checkAuth.js'

import * as UserController from './controllers/UserController.js'


mongoose
.connect('mongodb+srv://admin:admin@cluster0.umn59fx.mongodb.net/bd?retryWrites=true&w=majority')
.then(() =>{
    console.log("DB OK");
})
.catch((err) => {
    console.log('DB error', err)
})

const app = express();

app.use(express.json());
app.use(cors);
app.post('/auth/login', UserController.login);

app.post('/auth/register', registerValidator, UserController.register);

app.get('/auth/me', checkAuth, UserController.getMe);

app.listen(4444, (err) =>{
    if(err){
        return console.log(err);
    }

    console.log('server OK');
});