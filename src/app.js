import express from 'express';
import { config as dotenvConfig } from 'dotenv';
import cors from 'cors';
import connectToDB from '../src/config/db.connect.js'
import router from './routes/userRoutes.js'

dotenvConfig();

const app = express();

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

// db connection
connectToDB();


app.use('/', router);
export default app;