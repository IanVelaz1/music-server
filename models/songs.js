const mongoose=require("mongoose");

const songsSchema=new mongoose.Schema({
    songName:"",
    songArtist:"",
    songUrl:""
});

let Song=module.exports=mongoose.model("songs",songsSchema);


module.exports.saveSong=(song,callback)=>{
  Song.create(song,callback);
}

module.exports.recoverSongs=(song,callback)=>{
  Song.find(song,callback);
}