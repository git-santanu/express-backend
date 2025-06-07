const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT 
app.use(express.json())

const authRoutes = require('./routes/auth-route')
app.use('/api', authRoutes)
const protectedRoutes = require('./routes/protected-route')
app.use('/api', protectedRoutes)

app.listen(PORT)
  .on('listening', () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  })
  .on('error', (err) => {
    console.error('❌ Failed to start server:', err);
  });


