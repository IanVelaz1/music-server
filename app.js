const express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    helmet = require("helmet"),
    fs = require("fs"),
    fileUpload=require("express-fileupload"),
    multer=require("multer"),
    morgan=require("morgan"),
    mongoose=require("mongoose"),
    db=require("./config/config.js");
const upload=multer({dest:"music/"});
const port = process.env.PORT || 8000;

mongoose.connect(db.db,{useNewUrlParser:true});
mongoose.Promise=global.Promise;

///middlewares
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("dev"));


///routes
require("./musicRoutes")(app, fs,upload);



app.listen(port, (error, success) => {
    console.log("app conectada en puerto: " + port);
});