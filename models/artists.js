const mongoose=require("mongoose");

const artistSchema=new mongoose.Schema({
   artistName:"",
   artistAlbums:[],
   artistImage:"" 
});

const Artist=module.exports=mongoose.model("artist",artistSchema);

module.exports.createArtist=(artist,callback)=>{
  Artist.create(artist,callback);
}

module.exports.findArtists=(artist,callback)=>{
  Artist.find(artist,callback);
}

module.exports.findArtistBySong=(songId,callback)=>{
  Artist.findOne(songId,callback);
}

module.exports.findArtistByAlbum=(albumId,callback)=>{
 Artist.findOne(albumId,callback);
}

module.exports.findArtistById=(id,callback)=>{
 Artist.findById(id,callback);
}

module.exports.updateArtist=(id,artist,callback)=>{
 Artist.findByIdAndUpdate(id,artist,callback);
}

module.exports.deleteArtist=(id,callback)=>{
 Artist.findByIdAndRemove(id,callback);
}
