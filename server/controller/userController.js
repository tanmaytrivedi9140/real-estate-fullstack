import AsyncHandler from "express-async-handler";




export const createUser = AsyncHandler(async(req,res)=>{
    console.log("createing user ");

    let {email}  = req.body;
    console.log(email);
})