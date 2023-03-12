const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();
const PORT = config.get('serverPort');
const corsMiddleware = require('./middleware/cors.middleware');

app.use(corsMiddleware);

app.use(express.json());

const start = async ()=>{
    try{
        await mongoose.connect(config.get('dbUrl'));
        app.listen(PORT,()=>{
            console.log(`Server Started! On Port ${PORT}`);
        });
    }
    catch (e) {
        console.log('Error Server',e)
        }

}

start();
