const express = require('express')

const cors = require('cors')//This is used for connecting the ports of backend 
//and frontend as they are running on dufferent ports
const dotenv = require('dotenv')//This is Used For 
//Storing Confidential Information

//dotenv config
dotenv.config()

// Rest Object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())


//routes
app.use('/api/auth/kushal',require('./routes/Route'))
//port 
const PORT = process.env.PORT || 8000

//listen

app.listen(PORT,()=>
{
    console.log(`Server Running On http://localhost:${PORT}`)
})