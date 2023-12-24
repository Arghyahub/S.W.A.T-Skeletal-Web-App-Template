import mongoose , {ConnectOptions} from "mongoose";

import UserModel from "./user";

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/testDB',{
            useNewUrlParser : true,
            useUnifiedTopology :true
        } as ConnectOptions)
        console.log("DB connected") ;
    }
    catch(err) {
        console.log("::DB connection error::\n",err) ;
    }
}

export default connectDB;
export {
    UserModel,
    
}