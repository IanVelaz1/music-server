const express=require("express"),
app=express(),
bodyParser=require('body-parser'),
cors=require('cors'),
helmet=require("helmet"),
fs=require("fs");

const port=process.env.PORT||3000;


///middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(helmet());


///routes
require("./routes/musicRoutes")(app,fs);


app.listen(port,(error,success)=>{
 console.log("app conectada en puerto: "+port);
});