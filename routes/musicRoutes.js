module.exports=(app,fs)=>{

    app.get('/track/:id',(req,res)=>{
        const id=req.params.id;
        const trackPath="D:/polymer/musicServer/music/"+id+".mp3"; 
        console.log(trackPath);
        
        if(fs.existsSync(trackPath)){
            let musicStream=fs.createReadStream(trackPath);
            musicStream.pipe(res);
        }else{
            res.json({error:"file does not exist"})
            res.end();
        };
    });

}