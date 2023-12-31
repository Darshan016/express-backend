import dotenv from 'dotenv';

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Server running on ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`connection failed. error: ${err}`)
})





























/*const app = express()
;( async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log(error)
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`listening on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.error(error)
        throw error
        
    }
})()*/