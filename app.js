const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8001
app.use(express.json())

const authRoutes = require('./routes/auth-route')
app.use('/api', authRoutes)
const protectedRoutes = require('./routes/protected-route')
app.use('/api', protectedRoutes)

app.listen(PORT, () => {
    try {
        console.log(`Server is running on http://localhost:${PORT}`)
        } catch (error) {
        console.log('Something went wrong!', error) 
        }
})


