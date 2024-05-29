const {constants}=require('../constant/Constant')
const { VALIDATION_ERROR, UNAUTHORIZED ,FORBIDDEN,NOT_FOUND,SERVER_ERROR}=constants


const errorHandler = (err,req,res,next) => {
  
    const statusCode= res.statusCode ? res.statusCode:SERVER_ERROR;

    switch (statusCode){

        case VALIDATION_ERROR:
            res.json({
                title:"Validation Error",
                message:err.message,
                stackTree:err.stackTree

            })

            break;

            default:
                    console.log("NO ERROr , all good")
                break;
    }
}
module.exports=errorHandler
