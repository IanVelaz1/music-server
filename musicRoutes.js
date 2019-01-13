const path = require("path");
const url = require("url");
const ms=require("mediaserver");
const Song=require("./models/songs.js");


module.exports = (app,fs,upload) => {

    app.get("/track/:id", (req, res) => {
        const id=req.params.id;
        let songPath=path.resolve(`../music-server/music/${id}`);
        ms.pipe(req,res,songPath);
    });

    app.get("/tracks",(req,res)=>{
        let folderPath=path.resolve("../music-server/music");
        fs.readdir(folderPath,(error,items)=>{
            if(!error){
                res.json({tracks:items,status:200})
            }else{
                res.json({error:error})
            }
        });
    });

    app.post("/tracks",(req,res)=>{
        let files=req.files.song;
        const songName=files.name.replace(" ","-");
        let pathUpload=__dirname+"/music/"+songName;
        files.mv(pathUpload,(error)=>{
            if(error){
                res.json({error:error, msg:"error uploading file"});
            }else{
                res.status(200).json({msg:"song uploaded successfully",file:songName})
            }
         
        });

    });

    
        app.post("/song",(req,res)=>{
            let songObject={
                songName:req.body.songName,
                songArtist:req.body.songArtist,
                songUrl:req.body.songUrl
            }
            console.log(songObject);
            
            Song.saveSong(songObject,(error,succes)=>{
                if(error){
                    res.status(404).json({error:error,msg:"error saving song"});
                }else{
                    res.status(200).json({success:true,succes});
                    
                }
            });
        });

    app.get("/song",(req,res)=>{
        Song.recoverSongs({},(error,songs)=>{
            if(error){
                res.status(404).json({error:error,msg:"error saving song"});
            }else{
                res.status(200).json({success:true,songs});
            }
        });
    })
    

}