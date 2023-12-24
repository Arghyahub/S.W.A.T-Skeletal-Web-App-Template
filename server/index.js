const Express = require('express') ;
const cors = require('cors') ;
const mongoose = require('mongoose') ;

const app = Express() ;
app.use(cors()) ;
app.use(Express.json({limit: '50mb'})) ;

// :::: Important Settings :::::
const port = 8000
// mongoose.connect('mongodb://127.0.0.1:27017/testDB' , {
//     useNewUrlParser : true,
//     useUnifiedTopology :true
// })
// .then(()=> console.log('MongoDB connected') )
// .catch((err) => console.log('Unable to connect Databse\n',err)) ;

// const userSchema = new mongoose.Schema({
//     id: Number,
//     name: String
// });

// const User = mongoose.model('User',userSchema) ;
// :::::::::


app.post("/auth/signup",(req,res)=> {
    console.log("here") ;
    res.status(200).json({msg: "Hello from the Backend"}) ;
});

app.listen(port,() => {
    console.log("Server running") ;
});