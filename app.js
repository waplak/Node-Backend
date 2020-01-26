require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.get("/api",(req,res)=>{
    res.json({
        success:1,
        message:"this is rest api"
    });
});
app.use(express.json());
app.use("/api/users",userRouter);
app.listen(process.env.APP_PORT,()=>{
    console.log("Server Up And Running on port :",process.env.APP_PORT);
})