const express=require('express')
const errorHandler=require('./middleware/errorHandler');
const connectDB = require('./config/db');
const dotenv = require("dotenv");

dotenv.config();
const app=express();

connectDB();
const PORT= 8000 || procces.env.PORT

app.use(express.json())
app.use('/api/user',require('./routes/userRoutes') )
app.use('/api/items',require('./routes/itemRoutes'))
app.get('/api/',(req,res)=>{
    res.send("<h1>Hello ji , Welcome to Home Page</h1>")
})
app.use(errorHandler)
console.log(process.env.ACCESS_TOKEN_SECRETE)

app.listen(PORT ,()=>{
    console.log(`App is running in port ${PORT}`)
})
