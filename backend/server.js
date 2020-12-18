import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import exphbs from 'express-handlebars'
import path from 'path'
import fs from 'fs'
const __dirname = path.resolve();
const app = express()

dotenv.config()
const corsOptions = {
    origin: 'http://localhost:5000'
}

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, '/backend/resources/views'))

app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.render('home')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
