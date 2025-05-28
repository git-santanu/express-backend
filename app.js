const express = require('express')
const app = express()
app.use(express.json());
const PORT = process.env.PORT || 8001
require('dotenv').config()
app.use(express.json())

const authRoutes = require('./routes/auth-route')
app.use('/api', authRoutes)

app.listen(PORT, () => {
    try {
        console.log(`Server is running on http://localhost:${PORT}`)
        } catch (error) {
        console.log('Something went wrong!', error) 
        }
})


