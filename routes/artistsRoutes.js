const Artist=require("../models/artists.js");

module.exports=(app)=>{
    app.get("/artists",(req,res)=>{
        Artist.findArtists({},(error,artist)=>{
          if(error){
            res.status(400).json({error:error,msg:"error recovering artists"});
          }else{
            res.status(200).json({success:true,artist});
          }
        });
    });

    app.post("/artists",(req,res)=>{
      const artist=req.body;
      Artist.createArtist(artist,(error,artist)=>{
        if(error){
            res.status(400).json({error:error,msg:"error creating artist"});
          }else{
            res.status(200).json({success:true,artist});
          }
      });
    });

    app.get("/artists/:id",(req,res)=>{
        const id=req.params.id;
        Artist.findArtistById(id,(error,artist)=>{
            if(error){
                res.status(400).json({error:error,msg:"error recovering artist"});
              }else{
                res.status(200).json({success:true,artist});
              }
        });
    });

    app.put("/artists/:id",(req,res)=>{
        const id=req.params.id;
        const artist=req.body;
        Artist.updateArtist(id,artist,(error,artist)=>{
            if(error){
                res.status(400).json({error:error,msg:"error editing artist"});
              }else{
                res.status(200).json({success:true,artist});
              }
        });
    });

    app.delete("/artists/:id",(req,res)=>{
        const id=req.params.id;
        Artist.deleteArtist(id,(error,artist)=>{
            if(error){
                res.status(400).json({error:error,msg:"error deleting artist"});
              }else{
                res.status(200).json({success:true,artist});
              }
        });
    });

}