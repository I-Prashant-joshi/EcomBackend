
const express=require ('express');
const app=express();
const mongoose =require('mongoose')
const dotenv=require('dotenv');
const cors=require('cors');

dotenv.config();
const UserFile=require('./Routes/User');
const ProductFile=require('./Routes/Product');
const AuthFile=require('./Routes/auth');
const stripe=require('./Routes/stripe');
const sendMail=require('./Routes/mailer')
app.use(express.json());
app.use(cors({
    origin: "*", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
}));

app.use('/api/User',UserFile);
app.use('/api/Auth',AuthFile);
app.use('/api/product',ProductFile);
app.use('/api/new',stripe);
app.post('/api/mail',sendMail);


mongoose.connect(process.env.ConUrl)
.then(()=>console.log("connection Successful"))
.catch((err)=>console.log(err));
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
console.log("server is properly working")
});
app.get('/', (req, res) => {
    res.send('Server is up and running!');
  });




// app.use(express.json());

// app.post('/Create',async (req,res)=>{

//     let result = new ProductModel(req.body);
//     let data= await result.save();
//     console.log(data);

// });
// app.get('/data',async (req,res)=>{
//     try {

//     }catch(err) {
        
//     }
//     let result =  await ProductModel.find();
//     console.log(result)
//      res.send(result);
    
// });
// app.put('/update/:_id',async (req,res)=>{

//     let result =  await ProductModel.updateOne(
//         req.params,
//         {
//             $set:req.body
//         });
//      res.send(result);
    
// });



// app.listen(3000,()=>{
//     console.log("Server Started Successfully");
// })



