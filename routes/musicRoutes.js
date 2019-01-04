const path = require("path");
const url = require("url");
const ms=require("mediaserver");
module.exports = (app,fs) => {

    app.get("/track/:id", (req, res) => {
        const id=req.params.id;
        let songPath=path.resolve(`../music-server/music/${id}`);
        ms.pipe(req,res,songPath);
    });

    app.get("/tracks",(req,res)=>{
        let folderPath=path.resolve("../music-server/music");
        fs.readdir(folderPath,(error,items)=>{
            console.log(items);
            if(!error){
                res.json({tracks:items,status:200})
            }
        });
    });
}
/*
    app.get('/track/:id',(req,res)=>{
        const id=req.params.id;
        let songPath=path.resolve(`../music-server/music/${id}`);
        const stat=fs.statSync(songPath);
        let queryData=url.parse(req.url,true);
        const skip=typeof(queryData.skip)==="undefined"?0:queryData.skip;
        console.log(queryData);
        const startByte=stat.size*skip;
        res.writeHead(200,{
            'Content-Type':'audio/mp3',
            'Content-Length':stat.size-startByte
        });
        fs.createReadStream(songPath,{start:startByte}).pipe(res)
    });*/