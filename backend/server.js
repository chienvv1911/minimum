import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
const corsOptions = {
    origin: 'http://localhost:5000'
}

app.use(cors(corsOptions))
app.use(express.json())

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
